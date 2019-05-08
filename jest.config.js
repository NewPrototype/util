/*
 * @Author: heicao 
 * @Date: 2019-05-08 13:05:31 
 * @Last Modified by: heicao
 * @Last Modified time: 2019-05-08 13:21:32
 */
// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  // All imported modules in your tests should be mocked automatically
  //测试中所有导入的模块都应该被自动模拟
  // automock: true,

  // Stop running tests after `n` failures
  // Stop running tests after `n` failures
  // bail: 0,

  // Respect "browser" field in package.json when resolving modules
  // 尊重包中的“browser”字段。解析模块时使用json
  // browser: false,

  // The directory where Jest should store its cached dependency information
  // Jest应该存储其缓存的依赖项信息的目录
  // cacheDirectory: "/private/var/folders/4z/x7rh6qbj5jn59kbxdztf1h400000gp/T/jest_dy",

  // Automatically clear mock calls and instances between every test
  //自动清除每个测试之间的模拟调用和实例
  // clearMocks: false,

  // Indicates whether the coverage information should be collected while executing the test
  //指示在执行测试时是否应该收集覆盖率信息
  collectCoverage: true,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  //一组glob模式，指示应该为其收集覆盖率信息的一组文件
  // collectCoverageFrom: null,

  // The directory where Jest should output its coverage files
  //Jest应该输出其覆盖文件的目录
  coverageDirectory: "coverage",

  // An array of regexp pattern strings used to skip coverage collection
  //用于跳过覆盖集合的regexp模式字符串数组
  // coveragePathIgnorePatterns: [
  //   "/node_modules/"
  // ],

  // A list of reporter names that Jest uses when writing coverage reports
  //Jest在撰写报道时使用的记者姓名列表
  // coverageReporters: [
  //   "json",
  //   "text",
  //   "lcov",
  //   "clover"
  // ],

  // An object that configures minimum threshold enforcement for coverage results
  //为覆盖率结果配置最小阈值强制的对象
  // coverageThreshold: null,

  // A path to a custom dependency extractor
  //指向自定义依赖项提取器的路径
  // dependencyExtractor: null,

  // Make calling deprecated APIs throw helpful error messages
  // 使调用不推荐的api抛出有用的错误消息
  // errorOnDeprecated: false,

  // Force coverage collection from ignored files using an array of glob patterns
  //使用一组glob模式强制从被忽略的文件中收集覆盖率
  // forceCoverageMatch: [],

  // A path to a module which exports an async function that is triggered once before all test suites
  //模块的路径，该模块导出异步函数，异步函数在所有测试套件之前触发一次
  // globalSetup: null,

  // A path to a module which exports an async function that is triggered once after all test suites
  // 模块的路径，该模块导出异步函数，异步函数在所有测试套件之后触发一次
  // globalTeardown: null,

  // A set of global variables that need to be available in all test environments
  //需要在所有测试环境中可用的一组全局变量
  // globals: {},

  // An array of directory names to be searched recursively up from the requiring module's location
  //从所需模块的位置递归搜索的目录名数组
  // moduleDirectories: [
  //   "node_modules"
  // ],

  // An array of file extensions your modules use
  //模块使用的文件扩展名数组
  moduleFileExtensions: [
    "ts",
    "js",
    "json",
    "jsx",
    "tsx",
    "node"
  ],

  // A map from regular expressions to module names that allow to stub out resources with a single module
  //从正则表达式到模块名的映射，允许使用单个模块排除资源
  // moduleNameMapper: {},

  // An array of regexp pattern strings, matched against all module paths before considered 'visible' to the module loader
  //一个regexp模式字符串数组，在模块加载器认为“可见”之前匹配所有模块路径
  // modulePathIgnorePatterns: [],

  // Activates notifications for test results
  //激活测试结果通知
  // notify: false,

  // An enum that specifies notification mode. Requires { notify: true }
  //指定通知模式的枚举。需要{notify: true}
  // notifyMode: "failure-change",

  // A preset that is used as a base for Jest's configuration
  //一个预置，用作Jest配置的基础
  // preset: null,

  // Run tests from one or more projects
  //从一个或多个项目运行测试
  // projects: null,

  // Use this configuration option to add custom reporters to Jest
  //使用此配置选项可将自定义报告器添加到Jest
  // reporters: undefined,

  // Automatically reset mock state between every test
  //在每次测试之间自动重置模拟状态
  // resetMocks: false,

  // Reset the module registry before running each individual test
  //在运行每个单独的测试之前重置模块注册表
  // resetModules: false,

  // A path to a custom resolver
  //自定义解析器的路径
  // resolver: null,

  // Automatically restore mock state between every test
  //在每次测试之间自动恢复模拟状态
  // restoreMocks: false,

  // The root directory that Jest should scan for tests and modules within
  //Jest应该扫描其中的测试和模块的根目录
  // rootDir: null,

  // A list of paths to directories that Jest should use to search for files in
  //Jest用于搜索文件的目录的路径列表
  // roots: [
  //   "<rootDir>"
  // ],

  // Allows you to use a custom runner instead of Jest's default test runner
  //允许您使用自定义运行器，而不是Jest的默认测试运行器
  // runner: "jest-runner",

  // The paths to modules that run some code to configure or set up the testing environment before each test
  //模块的路径，这些模块运行一些代码，在每次测试之前配置或设置测试环境
  // setupFiles: [],

  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  //模块的路径列表，这些模块运行一些代码，在每次测试之前配置或设置测试框架
  // setupFilesAfterEnv: [],

  // A list of paths to snapshot serializer modules Jest should use for snapshot testing
  //快照序列化器模块的路径列表，Jest应该用于快照测试
  // snapshotSerializers: [],

  // The test environment that will be used for testing
  //将用于测试的测试环境
  testEnvironment: "node",

  // Options that will be passed to the testEnvironment
  //将传递给testEnvironment的选项
  // testEnvironmentOptions: {},

  // Adds a location field to test results
  //向测试结果添加位置字段
  testLocationInResults: true,

  // The glob patterns Jest uses to detect test files
  //Jest用来检测测试文件的glob模式
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  //针对所有测试路径匹配的regexp模式字符串数组，将跳过匹配的测试
  // testPathIgnorePatterns: [
  //   "/node_modules/"
  // ],

  // The regexp pattern or array of patterns that Jest uses to detect test files
  //Jest用于检测测试文件的regexp模式或模式数组
  // testRegex: [],

  // This option allows the use of a custom results processor
  //此选项允许使用自定义结果处理器
  // testResultsProcessor: null,

  // This option allows use of a custom test runner
  //此选项允许使用自定义测试运行器
  // testRunner: "jasmine2",

  // This option sets the URL for the jsdom environment. It is reflected in properties such as location.href
  //此选项设置jsdom环境的URL。它反映在属性中，比如location.href
  // testURL: "http://localhost",

  // Setting this value to "fake" allows the use of fake timers for functions such as "setTimeout"
  //将此值设置为“fake”允许对“setTimeout”等函数使用伪计时器
  // timers: "real",

  // A map from regular expressions to paths to transformers
  //从正则表达式到路径到转换器的映射
  // transform: null,

  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  //对所有源文件路径匹配的regexp模式字符串数组，匹配的文件将跳过转换
  // transformIgnorePatterns: [
  //   "/node_modules/"
  // ],

  // An array of regexp pattern strings that are matched against all modules before the module loader will automatically return a mock for them
  //在模块加载器之前匹配所有模块的regexp模式字符串数组将自动为它们返回一个模拟
  // unmockedModulePathPatterns: undefined,

  // Indicates whether each individual test should be reported during the run
  //指示是否应在运行期间报告每个单独的测试
  verbose: true,

  // An array of regexp patterns that are matched against all source file paths before re-running tests in watch mode
  //在监视模式下重新运行测试之前，针对所有源文件路径匹配的regexp模式数组
  // watchPathIgnorePatterns: [],

  // Whether to use watchman for file crawling
  //是否使用watchman进行文件爬行
  // watchman: true,
};
