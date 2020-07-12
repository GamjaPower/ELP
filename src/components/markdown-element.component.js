import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import marked from 'marked';
import { withStyles } from '@material-ui/core/styles';
import prism from 'prismjs';

import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-diff';
import 'prismjs/components/prism-jsx';

import 'prismjs/themes/prism.css';

const renderer = new marked.Renderer();
marked.setOptions({
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  // prism uses the following class prefix.
  langPrefix: 'language-',
  highlight(code, lang) {
    let language;
    switch (lang) {
    case 'diff':
      language = prism.languages.diff;
      break;

    case 'css':
      language = prism.languages.css;
      break;

    case 'js':
    case 'jsx':
    default:
      language = prism.languages.jsx;
      break;
    }
    return prism.highlight(code, language);
  },
  renderer
});

// in case we don't import the prism theme, we can use the following JSS
const styles = theme => ({
  root: {
    fontFamily: theme.typography.fontFamily,
    fontSize: 16,
    color: theme.palette.text.primary,
    '& .anchor-link': {
      marginTop: -theme.spacing.unit * 12, // Offset for the anchor.
      position: 'absolute'
    },
    '& pre, & pre[class*="language-"]': {
      margin: `${theme.spacing.unit * 3}px 0`,
      padding: '12px 18px',
      backgroundColor: theme.palette.background.paper,
      borderRadius: 3,
      overflow: 'auto'
    },
    '& code[class*="language-"]': {
      color: theme.palette.type === 'light' ? theme.palette.text.primary : theme.palette.common.white,
      textShadow: `0 1px ${theme.palette.type === 'light' ? theme.palette.common.white : theme.palette.common.black}`
    },
    '& .token.tag': {
      color: theme.palette.type === 'light' ? '#905' : '#fb83ae'
    },
    '& .token.attr-name': {
      color: theme.palette.type === 'light' ? '#690' : '#a6e22e'
    },
    '& p code, & ul code, & pre code': {
      fontSize: 14,
      lineHeight: 1.6
    },
    '& h1': {
      ...theme.typography.display2,
      color: theme.palette.text.secondary,
      margin: '0.7em 0'
    },
    '& h2': {
      ...theme.typography.display1,
      color: theme.palette.text.secondary,
      margin: '1em 0 0.7em'
    },
    '& h3': {
      ...theme.typography.headline,
      color: theme.palette.text.secondary,
      margin: '1em 0 0.7em'
    },
    '& h4': {
      ...theme.typography.title,
      color: theme.palette.text.secondary,
      margin: '1em 0 0.7em'
    },
    '& p, & ul, & ol': {
      lineHeight: 1.6
    },
    '& h1, & h2, & h3, & h4': {
      '& code': {
        fontSize: 'inherit',
        lineHeight: 'inherit',
        // Remove scroll on small screens.
        wordBreak: 'break-word'
      },
      '& .anchor-link-style': {
        opacity: 0,
        // To prevent the link to get the focus.
        display: 'none'
      },
      '&:hover .anchor-link-style': {
        display: 'inline-block',
        opacity: 1,
        padding: `0 ${theme.spacing.unit}px`,
        color: theme.palette.text.hint,
        '&:hover': {
          color: theme.palette.text.secondary
        },
        '& svg': {
          width: '0.55em',
          height: '0.55em',
          fill: 'currentColor'
        }
      }
    },
    '& table': {
      width: '100%',
      display: 'block',
      overflowX: 'auto',
      borderCollapse: 'collapse',
      borderSpacing: 0,
      overflow: 'hidden',
      '& .prop-name': {
        fontSize: 13,
        fontFamily: 'Consolas, "Liberation Mono", Menlo, monospace',
      },
      '& .required': {
        color: theme.palette.type === 'light' ? '#006500' : '#9bc89b',
      },
      '& .prop-type': {
        fontSize: 13,
        fontFamily: 'Consolas, "Liberation Mono", Menlo, monospace',
        color: theme.palette.type === 'light' ? '#932981' : '#dbb0d0',
      },
      '& .prop-default': {
        fontSize: 13,
        fontFamily: 'Consolas, "Liberation Mono", Menlo, monospace',
        borderBottom: `1px dotted ${theme.palette.text.hint}`
      }
    },
    '& thead': {
      fontSize: 14,
      fontWeight: theme.typography.fontWeightMedium,
      color: theme.palette.text.secondary
    },
    '& tbody': {
      fontSize: 14,
      lineHeight: 1.5,
      color: theme.palette.text.primary
    },
    '& td': {
      borderBottom: `1px solid ${theme.palette.divider}`,
      padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px ${theme.spacing.unit}px ${
        theme.spacing.unit
      }px`,
      textAlign: 'left',
    },
    '& td:last-child': {
      paddingRight: theme.spacing.unit * 3
    },
    '& td compact': {
      paddingRight: theme.spacing.unit * 3
    },
    '& td code': {
      fontSize: 13,
      lineHeight: 1.6
    },
    '& th': {
      whiteSpace: 'pre',
      borderBottom: `1px solid ${theme.palette.divider}`,
      fontWeight: theme.typography.fontWeightMedium,
      padding: `0 ${theme.spacing.unit * 2}px 0 ${theme.spacing.unit}px`,
      textAlign: 'left'
    },
    '& th:last-child': {
      paddingRight: theme.spacing.unit * 3
    },
    '& tr': {
      height: 48
    },
    '& thead tr': {
      height: 64
    },
    '& strong': {
      fontWeight: theme.typography.fontWeightMedium
    },
    '& blockquote': {
      borderLeft: `5px solid ${theme.palette.text.hint}`,
      backgroundColor: theme.palette.background.paper,
      padding: `${theme.spacing.unit / 2}px ${theme.spacing.unit * 3}px`,
      margin: `${theme.spacing.unit * 3}px 0`
    },
    '& a, & a code': {
      // Style taken from the Link component
      color: theme.palette.secondary.main,
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline'
      }
    },
    '& img': {
      maxWidth: '100%'
    }
  }
});

function MarkdownElement(props) {
  const {
    classes, className, text, ...other
  } = props;

  /* eslint-disable react/no-danger */
  return (
    <div
      className={classNames(classes.root, 'markdown-body', className)}
      dangerouslySetInnerHTML={{ __html: marked(text) }}
      {...other}
    />
  );
  /* eslint-enable */
}

MarkdownElement.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default withStyles(styles, { flip: false })(MarkdownElement);
