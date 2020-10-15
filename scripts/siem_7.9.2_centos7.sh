#!/bin/bash

HOST_IP=192.168.0.221
HOST_DNS="node01.local"
HOST_NAME="node01"


# hostname 
hostnamectl set-hostname $HOST_NAME
echo "$HOST_IP $HOST_NAME $HOST_DNS" >> /etc/hosts


### config memlock
echo "elasticsearch soft memlock unlimited" >> /etc/security/limits.conf
echo "elasticsearch hard memlock unlimited" >> /etc/security/limits.conf
echo "vm.max_map_count=262144" >> /etc/sysctl.conf

# util
yum install net-tools -y
yum install wget -y
yum install unzip -y
yum install expect -y

# elasticsearch 
wget https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-7.9.2-x86_64.rpm
rpm -ivh elasticsearch-7.9.2-x86_64.rpm
systemctl daemon-reload
systemctl enable elasticsearch.service
systemctl start elasticsearch.service
sed -i -r "s|^#cluster.name:.*$|cluster.name: siem|" /etc/elasticsearch/elasticsearch.yml
sed -i -r "s|^#network.host:.*$|network.host: $HOST_IP|" /etc/elasticsearch/elasticsearch.yml
sed -i -r "s|^#node.name:.*$|node.name: $HOST_NAME|" /etc/elasticsearch/elasticsearch.yml
sed -i -r "s|^#network.host:.*$|network.host: $HOST_DNS|" /etc/elasticsearch/elasticsearch.yml
sed -i -r "s|^#discovery.seed_hosts:.*$|discovery.seed_hosts: [\"$HOST_IP\"]|" /etc/elasticsearch/elasticsearch.yml
sed -i -r "s|^#cluster.initial_master_nodes:.*$|cluster.initial_master_nodes: [\"$HOST_IP\"]|" /etc/elasticsearch/elasticsearch.yml

echo "xpack.security.enabled: true" >> /etc/elasticsearch/elasticsearch.yml
echo "xpack.security.transport.ssl.enabled: true" >> /etc/elasticsearch/elasticsearch.yml
echo "xpack.security.transport.ssl.verification_mode: certificate" >> /etc/elasticsearch/elasticsearch.yml
echo "xpack.security.transport.ssl.keystore.path: elastic-certificates.p12" >> /etc/elasticsearch/elasticsearch.yml
echo "xpack.security.transport.ssl.truststore.path: elastic-certificates.p12" >> /etc/elasticsearch/elasticsearch.yml
echo "xpack.security.http.ssl.enabled: false" >> /etc/elasticsearch/elasticsearch.yml
echo "xpack.security.http.ssl.key: certs/$HOST_NAME/$HOST_NAME.key" >> /etc/elasticsearch/elasticsearch.yml
echo "xpack.security.http.ssl.certificate: certs/$HOST_NAME/$HOST_NAME.crt" >> /etc/elasticsearch/elasticsearch.yml
echo "xpack.security.http.ssl.certificate_authorities: certs/ca/ca.crt" >> /etc/elasticsearch/elasticsearch.yml
echo "node.master: true" >> /etc/elasticsearch/elasticsearch.yml
echo "node.data: true" >> /etc/elasticsearch/elasticsearch.yml
echo "node.ingest: true" >> /etc/elasticsearch/elasticsearch.yml

echo "instances:" > instance.yml
echo "  - name: '$HOST_NAME' " >> instance.yml
echo "    dns: ['$HOST_DNS']" >> instance.yml


/usr/share/elasticsearch/bin/elasticsearch-certutil cert ca --pem --in ~/instance.yml --out ~/certs.zip

mkdir -p /etc/elasticsearch/certs
cd /etc/elasticsearch/certs/
unzip ~/certs.zip
chown -R elasticsearch.elasticsearch /etc/elasticsearch/certs
chmod 500 -R /etc/elasticsearch/certs
cd ~/

/usr/share/elasticsearch/bin/elasticsearch-certutil cert -out /etc/elasticsearch/elastic-certificates.p12 -pass ""

chmod 400 /etc/elasticsearch/elastic-certificates.p12
chown elasticsearch.elasticsearch /etc/elasticsearch/elastic-certificates.p12

# elasticsearch service
sudo systemctl daemon-reload
sudo systemctl enable elasticsearch.service

# kibana
wget https://artifacts.elastic.co/downloads/kibana/kibana-7.9.2-x86_64.rpm
rpm -ivh kibana-7.9.2-x86_64.rpm

cp -r /etc/elasticsearch/certs /etc/kibana
chmod 500 -R /etc/kibana/certs
chown -R kibana.kibana /etc/kibana/certs



sed -i -r "s|^#server.port:.*$|server.port: 5601|" /etc/kibana/kibana.yml
sed -i -r "s|^#server.host:.*$|server.host: \"$HOST_DNS\" |" /etc/kibana/kibana.yml
sed -i -r "s|^#server.name:.*$|server.name: \"$HOST_NAME\" |" /etc/kibana/kibana.yml

echo "elasticsearch.hosts: [\"https://$HOST_DNS:9200\"] " >> /etc/kibana/kibana.yml
echo "elasticsearch.username: kibana_system" >> /etc/kibana/kibana.yml
echo "elasticsearch.password: password" >> /etc/kibana/kibana.yml
echo "server.ssl.enabled: true" >> /etc/kibana/kibana.yml
echo "server.ssl.certificate: /etc/kibana/certs/node01/node01.crt" >> /etc/kibana/kibana.yml
echo "server.ssl.key: /etc/kibana/certs/node01/node01.key" >> /etc/kibana/kibana.yml
echo "elasticsearch.ssl.certificateAuthorities: [ \"/etc/kibana/certs/ca/ca.crt\" ]" >> /etc/kibana/kibana.yml
echo "xpack.encryptedSavedObjects.encryptionKey: 'fhjskloppd678ehkdfdlliverpoolfcr'" >> /etc/kibana/kibana.yml

# kibana service
sudo systemctl daemon-reload
sudo systemctl enable kibana.service

wget https://raw.githubusercontent.com/GamjaPower/ELP/master/scripts/xpack.expect

chmod 755 xpack.expect

reboot
