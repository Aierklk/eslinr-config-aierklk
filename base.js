module.exports = {
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 2019,
        // ECMAScript modules 模式
        sourceType: 'module',
        ecmaFeatures: {
            // 不允许 return 语句出现在 global 环境下
            globalReturn: false,
            // 开启全局 script 模式
            impliedStrict: true,
            jsx: true,
        },
        // 没有 babelrc 配置文件，不使用 babel-eslint 来解析
        requireConfigFile: true,
        // 仅允许 import export 语句出现在模块的顶层
        allowImportExportEverywhere: false,
    },
    env: {
        browser: true,
        node: true,
        commonjs: true,
        es6: true,
    },
    // 以当前目录为根目录，不再向上查找 .eslintrc.js
    root: true,
    rules: {
        /**
         * 禁止语句结束使用分号
         */
        'semi': [2, 'never'],
        /**
         * 函数定义时括号前面要有空格
         */
        'space-before-function-paren': [2, 'always'],
        /**
         * 注释的斜线或 * 后必须有空格
         */
        'spaced-comment': [
            'error',
            'always',
            {
                block: {
                    exceptions: ['*'],
                    balanced: true,
                },
            },
        ],
        /**
         * 缩进数, 四个空格
         */
        'indent': [2, 4],
        /**
         * 逗号后面需要使用空格
         */
        'comma-spacing': [2, {
            before: false,
            after: true,
        }],
        /**
         * 引号类型
         */
        'quotes': [2, 'single'],
        /**
         * 禁止使用var
         */
        'no-var': [2],
        /**
		 * 必须使用 === 或 !==，禁止使用 == 或 !=
		 */
        'eqeqeq': [2, 'always'],
        /**
         * 禁止使用eval
         */
        'no-eval': [2],
        /**
		 * 箭头函数体必须由大括号包裹
		 */
        'arrow-body-style': [2, 'always'],
        /**
         * 大括号风格
         */
        'brace-style': [2, '1tbs'],
        /**
         * 禁止在代码块中开括号前和闭括号后有空格
         */
        'block-spacing': [2, 'always'],
        /**
         * 逗号位置
         */
        'comma-style': [2, 'last'],
        /**
         * 遵循大括号约定
         */
        'curly': [2, 'all'],
        /**
         * 函数风格
         */
        'func-style': [2, 'expression'],
        /**
         * 类命名首字母大写
         */
        'new-cap': [2, {
            newIsCap: true,
            capIsNew: false,
            properties: true,
        }],
        /**
         * 构建类函数需要括号
         */
        'new-parens': [2],
        /**
         * 禁止对const重新赋值
         */
        'no-const-assign': [2],
        /**
         * 禁止重复定义类成员
         */
        'no-dupe-class-members': [2],
        /**
         * 禁止使用逗号操作符
         */
        'no-sequences': [2],
        /**
         * 禁止在数组中出现连续逗号
         */
        'no-sparse-arrays': [2],
        /**
         * 禁止使用逗号声明多个变量
         */
        'one-var': [2, 'never'],
        /**
         * 禁止使用strict
         */
        'strict': [2, 'never'],
        /**
         * typeof 表达式比较的对象必须是 'undefined', 'object', 'boolean', 'number', 'string', 'function', 'symbol', 或 'bigint'
         */
        'valid-typeof': [2],
        /**
         * 必须使用 isNaN(foo) 而不是 foo === NaN
         */
        'use-isnan': [2],
        /**
         * 强制在对象字面量的键和值之间使用一致的空格
         */
        'key-spacing': [2, {
            beforeColon: false,
            afterColon: true,
            mode: 'strict',
        }],
        /**
         * 禁止使用特殊空白符（比如全角空格），除非是出现在字符串、正则表达式或模版字符串中
         */
        'no-irregular-whitespace': [
            'error',
            {
                skipStrings: true,
                skipComments: false,
                skipRegExps: true,
                skipTemplates: true,
            },
        ],
        /**
         * 禁止使用超出javascript精度的数字
         */
        'no-loss-of-precision': [2],
        /**
         * 禁止使用连续赋值
         */
        'no-multi-assign': [2],
        /**
         * 强制关键字周围空格的一致性
         */
        'keyword-spacing': [2, {
            before: true,
            after: true,
        }],
        /**
         * 强制在花括号中使用一致的空格
         */
        'object-curly-spacing': [2, 'never'],
        /**
         * 要求使用尾拖逗号
         */
        'comma-dangle': [2, 'always-multiline'],
        /**
         * 要求函数圆括号前要有一个空格
         */
        'space-before-function-paren': [2, 'always'],
        /**
         * 要求圆括号内没有空格
         */
        'space-in-parens': [2, 'never'],
    },
}