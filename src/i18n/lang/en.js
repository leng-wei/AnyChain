import enLocale from 'element-ui/lib/locale/lang/en'
const en = {
    nav: {
        home: 'Home',
        introduction: 'Introduction',
        ourCase: 'Case',
        document: 'Document',
        changeLog: 'ChangeLog'
    },
    home: {
        head: {
            h1: 'AnyChain',
            h2: 'An IDE that focus on blockchain smart contract development'
        },
        doWhat: {
            title: 'What can you do with AnyChain?',
            con: 'You can use selected language and templates to write, translate and register smart contracts of blockchain. ' +
            'Meanwhile, AnyChain supports corresponding test and official chains of multiple public chains, it helps to realize ' +
            'part of functionalities of wallet on each chain such as account management, registration and transaction, which can ' +
            'greatly benefit coding efficiency, quality of code and etc.',
            title1: 'Write smart contract',
            con1: 'IDE supports various languages and offer functionalities such as code association, partially templates ' +
            '(for example, token contract template), to assist developers to write smart contracts rapidly and efficiently.',
            title2: 'Translate smart contract',
            con2: 'Within finger taps, IDE makes it so simple to generate smart contract into bytecode by its multi-language translation function.',
            title3: 'Register smart contract',
            con3: 'Support smart contract release. User can switch and release smart contract onto the chains after successfully tested on test chain.',
            title4: 'Manage your smart contracts',
            con4: 'You can manage multiple original files easily with AnyChain, including registered contracts management and review.' +
            ' All contracts are listed in a file system form.'
        },
        characteristic: {
            title: 'Features of AnyChain',
            title1: 'It supports more than just one chain',
            con1: 'AnyChain supports corresponding test and official chains of multiple public chains such as CTC, UB, HX, it helps to realize part of functionalities of' +
            ' wallet on each chain such as account management, registration and transaction.<br>' +
            'AnyChain will also support various virtue machines to satisfy more of your application scenario.',
            title2: 'Develop in no time',
            con2: 'Apart from code association, auto grammar reminder, contract code templates (TOKEN, DAPP) ' +
            'which already existed and many other shortcut operation,<br>' +
            'IDE will offer official contract template library along with its community in order to make contract writing more secure and particle.',
            title3: 'Auto DebugTool',
            con3: 'AnyChain is committed to bring excellent through experience. It offers auto testing locally which builds testing chain automatically for ' +
            'you to ensure a quality of code. Testing chain can be built or cancelled anytime, in order to iterate your code rapidly.<br>' +
            'Step through code is available to all languages. ',
            title4: 'Fine Control',
            con4: 'With Anychain, you can control your implementation specifically.<br>' +
            'Implementation such as “all pause” “Step over function”，“step out function”, ' +
            '“edit and continue” “break-point setting” and “code running check-up” can be done whenever as you want.'
        },
        footer: {
            con: 'Too much more can be done with AnyChain, <br>' +
            'join us and start exploring AnyChani right now!'
        }
    },
  ...enLocale
}
export default en;
