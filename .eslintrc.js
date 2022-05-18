module.exports = {
    "extends": [
      "plugin:@typescript-eslint/recommended",
      "airbnb-typescript",
      "plugin:@typescript-eslint/recommended-requiring-type-checking",
      "plugin:react-hooks/recommended",
      "plugin:jsx-a11y/recommended",
      "plugin:react/recommended",
      "plugin:import/errors",
      "plugin:import/warnings",
      "airbnb",
      "prettier"
    ],
    "plugins": ["@typescript-eslint", "prettier", "jsx-a11y", "react", "html", "react-hooks"],
    "globals": {
      "React": true,
      "JSX": true
    },    
    "env": {
      "browser": true,
      "commonjs": true,
      "es2021": true,
      "jest": true,
      "node": true
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
       "project": "./tsconfig.json",
       "ecmaFeatures": {
           "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module",
        "requireConfigFile": false,      
        "babelOptions": {
          "presets": ["@babel/preset-react"]
        }      
    },
    
    "rules": {
      "@typescript-eslint/no-misused-promises": [
        "error",
        {
          "checksVoidReturn": false
        }
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      "no-redeclare": "off",
      "@typescript-eslint/no-redeclare": [
        "warn",
        {
          "ignoreDeclarationMerge": true
        }
      ],
      "@typescript-eslint/no-floating-promises": "warn",
      "no-shadow": [
        "off",
        {
          "hoist": "all",
          "allow": ["resolve", "reject", "done", "next", "err", "error"]
        }
      ],
      "@typescript-eslint/no-shadow": ["warn"],
      "comma-dangle": "off",
      "@typescript-eslint/comma-dangle": ["off"],
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["warn"],
      "no-use-before-define": "off",
      "@typescript-eslint/no-use-before-define": ["error"],  
      "no-console": "off",
      "no-debugger": "off",
      "no-alert": "off",
      "import/extensions": "off",
      "import/prefer-default-export": "off",
      "func-names": "off",
      "object-shorthand": "warn",
      "class-methods-use-this": "off",
      "prettier/prettier": "error",
      "spaced-comment": "warn",
      "react/jsx-filename-extension": [
        "error",
        {
          "extensions": [".js", ".jsx", ".ts", ".tsx", ".mdx"]
        }
      ],
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react/jsx-props-no-spreading": "warn",    
      "react/react-in-jsx-scope": "warn",
      "jsx-a11y/href-no-hash": "off",
      "jsx-a11y/anchor-is-valid": [
        "warn",
        {
          "aspects": ["invalidHref"]
        }
      ],      
      "max-len": [
        "warn",
        {
          "code": 80,
          "tabWidth": 2,
          "comments": 80,
          "ignoreComments": false,
          "ignoreTrailingComments": true,
          "ignoreUrls": true,
          "ignoreStrings": true,
          "ignoreTemplateLiterals": true,
          "ignoreRegExpLiterals": true
        }
      ]
    }
  }
