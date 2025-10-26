// 机体数据
const knightmareFrames = [
    {
        id: 1,
        name_zh: "晓 直参样式",
        name_en: "Akatsuki Command Model Zikisan",
        model: "Type-05S/G",
        faction: "black-knights",
        generation: "第7世代",
        type: "指挥官机",
        pilot: "朝比奈省悟、千叶凪沙、C.C.、木下",
        // 新增多图片数组
        images: [
            {
                url: "https://s21.ax1x.com/2025/10/23/pVXE9yV.webp",
                description: "标准配色"
            },
            {
                url: "https://s21.ax1x.com/2025/10/23/pVXEpQ0.webp", 
                description: "C.C.配色"
            }
        ],
        // 保留原有的 image 字段用于向后兼容
        image: "https://s21.ax1x.com/2025/10/23/pVXE9yV.webp",
        description: "晓直参式样是黑色骑士团中队长们驾驶的晓系列 Knightmare 框架的变体机型。与标准的晓量产型相比，它的外观更接近月下。千叶凪沙、朝比奈省悟及其他中队长驾驶的是深蓝色版本。C.C. 驾驶的则是该机体的粉色版本。",
        specs: {
            height: "4.81m",
            weight: "8.26t",
            armor: "钨",
            power: "樱石能源块",
            developer: "贾巴尔普尔研究中心",
            derivedFrom: "晓 量产机"
        },
        equipment: {
            standard: [
                { name: "驾驶舱弹射系统", description: "利用火箭助推器使驾驶舱与KMF分离" },
                { name: "辐射波技术", description: "利用辐射波使KMF部件膨胀至爆炸" },
                { name: "陆地滑行推进系统", description: "利用脚跟处的动力轮大幅提升KMF的机动性" }
            ],
            optional: [
                { name: "空中滑翔系统", description: "使KMF浮空" }
            ]
        },
        weapons: {
            fixed: [
                { name: "2 × 肩部式机枪", description: "" },
                { name: "1 × 飞燕爪牙（辐射波动）", description: "" }
            ],
            handheld: [
                { name: "1 × 回旋刃刀", description: "一种能够切割大多数KMF金属外壳的超高温旋转刀片" },
                { name: "1 × 左（或右）臂装双管手炮", description: "" }
            ],
            optional: [
                { name: "1 × 右臂装火箭炮", description: "" },
                { name: "3 × 右臂装辐射波导弹", description: "" },
                { name: "1 × 12联装导弹发射器", description: "有时装备于其空降滑翔翼系统上" }
            ]
        },
        design: `<p>黑色骑士团的工程师拉克夏塔·恰拉设计了这款指挥官单位，命名为"直参式样"。"直参"是日语中对于将军直属部下的旧称。该指挥官机的性能水平超越了基础型晓，其一个重要特征是头部安装的一对辐射波发生器，使其能够像Type-02红莲二式一样生成防御性屏障。</p><p>它配备了与标准晓类似的武器，但使用的是全尺寸的回旋刃刀，而非缩短的警棍版本。在其可选武器中，二联装手枪和辐射波导弹是最常见的。它们也可以使用可选的空降滑翔翼单元，相应的，机体型号会变更为 Type-05S/F2F 晓 直参空战式样。</p>`
    },
    {
        id: 2,
        name_zh: "晓 量产型",
        name_en: "Akatsuki Mass-Production Model",
        model: "Type-05",
        faction: "black-knights",
        generation: "第7世代",
        type: "量产机",
        pilot: "玉城真一郎、杉山健人、柯内莉亚·li·不列颠（Geass狩猎）、赵美玲",
        image: "https://s21.ax1x.com/2025/10/23/pVXAzzq.webp",
        descriptiondescription: "晓量产型是黑色骑士团在第二季中被逐出日本后的标准Knightmare Frame模型。它们作为印度支持的表现被给予黑色骑士团，在印度制造。",
        specs: {
            height: "4.49m",
            weight: "7.82t",
            armor: "钨",
            power: "樱石能源块",
            developer: "贾巴尔普尔研究中心",
            derivedFrom: "红莲",
            development: "晓 直参样式、斩月、Amanecer"
        },
        equipment: {
            standard: [
                { name: "驾驶舱弹射系统", description: "利用火箭助推器使驾驶舱与KMF分离" },
                { name: "陆地滑行推进系统", description: "利用脚跟处的动力轮大幅提升KMF的机动性" }
            ],
            optional: [
                { name: "空中滑翔系统", description: "使KMF浮空" }
            ]
        },
        weapons: {
            fixed: [
                { name: "2 × 肩部式机枪", description: "" },
                { name: "1 × 飞燕爪牙（Slash Harken）", description: "" }
            ],
            handheld: [
                { name: "1 × 回旋刃刀", description: "一种能够切割大多数KMF金属外壳的超高温旋转刀片" },
                { name: "1 × 左（或右）臂装双管手炮", description: "" }
            ],
            optional: [
                { name: "1 × 右臂装火箭炮", description: "" },
                { name: "3 × 右臂装辐射波导弹", description: "" },
                { name: "1 × 12联装导弹发射器", description: "有时装备于其空降滑翔翼系统上" }
            ]
        },
        design: `<p>晓在许多方面是月下的进化而非全新设计，尽管它们的框架在视觉上相似，晓的主要区别特征是简化的头部和肩部装甲，推测是为了易于生产。它是银色带绿色色调，并且可以装备空中滑翔系统，因此获得型号 Type-05/F2D 晓量产飞行 enabled 版本。</p><p>它的主要武装是胸部左侧的一个飞燕爪牙和一个简化版的花天狂骨刀，形状更像警棍，顶部延伸出刀刃。对于远程战斗，它标准配备两个内置在肩部的机关炮。可选地，它也可以装备月下定制手枪的双管版本、火箭炮、或（更罕见地）通常见于指挥官模型的相同辐射波导弹。空中滑翔翼单元也配有集成导弹发射器。</p>`,
        combat: `<p>晓首次亮相在黑色骑士团在中国联邦时期，具体在小沛战斗中对高级宦官部队的突然袭击。战斗后，晓在第二季余下的以下战斗中出现：八十八帝陵墓战斗、对Geass教团的袭击、对东京定居点的第二次袭击、富士山战斗。</p>`
    },
    {
        id: 3,
        name_zh: "巴米德斯",
        name_en: "Bamides",
        model: "/",
        faction: "other",
        generation: "第4世代",
        type: "量产机",
        pilot: "/",
        image: "https://s21.ax1x.com/2025/10/23/pVXAxWn.webp",
        descriptiondescription: "巴米德斯是中东联邦开发的一种不寻常的第四世代Knightmare Frame，用于对抗神圣不列颠帝国的军事力量。",
        specs: {
            height: "11.19m",
            weight: "90.29t",
            armor: "钨",
            power: "樱石能源块",
            developer: "中东联邦"
        },
        equipment: {
            optional: [
                { name: "悬浮单元", description: "允许超低空悬浮" },
                { name: "沙地板", description: "提供在沙漠地形上的改进牵引力" }
            ]
        },
        weapons: {
            fixed: [
                { name: "1 × 腹部安装长程加农炮", description: "设计 primarily 用于瞄准硬装甲车辆/设施" },
                { name: "2 × 底部肩部安装机枪", description: "一个设计用于反人员战斗，另一个用于瞄准软装甲车辆/设施" },
                { name: "2 × 顶部肩部安装导弹发射器", description: "每个可携带6-12枚导弹" }
            ]
        },
        design: `<p>巴米德斯的设计就Knightmare Frame而言非常非传统。它没有肢体，只有三条三脚架式的腿和一个抬高的"肩"区。它的腿配备了悬浮引擎或沙地板，而不是陆地滑行系统，这在其制造者地区的沙漠沙地上提供了更好的牵引力。它也比萨瑟兰或格洛斯特大得多，需要大量人员操作。其配置相比更传统的Knightmare具有相当好的速度，但大尺寸和缺乏机动性使其成为更高世代Knightmare框架的容易目标。</p><p>尽管有缺点，巴米德斯在远程战斗中仍具有优势，并且由于其更大的火力和射程，可以一击摧毁不列颠坦克。它也是重装甲的，能够承受上述坦克和大多数其他装甲战斗车辆的直接命中，以及轻武器火力。然而，其专注于远程战斗意味着除了机枪外，没有武器用于近战。阿拉伯沙漠的绵长沙地是巴米德斯最致命的地方，因为它可以从远距离挑选敌人，同时在沙地和粗糙地形上 silently 漂浮。</p><p>其主要武器包括肩上的两包导弹发射器，每个可携带六到十二枚导弹，两个侧装机枪（一个设计用于反人员战斗，另一个用于瞄准其他软装甲车辆/设施），以及一个长程加农炮（主要设计用于瞄准任何硬装甲车辆/设施）直接安装在头部下方。</p>`,
        combat: `<p>巴米德斯首次出现在第一季第五集：公主与魔女，它们战斗并几乎击败了一个不列颠部队师。然而，它们随后被柯内莉亚公主的皇家卫队交战并迅速击败，由吉尔伯特·G·P·吉尔福德和安德烈亚斯·达顿领导，后者将巴米德斯驳斥为"劣质的、超大的、仿制Knightmare"。同时，柯内莉亚本人绕过了防御部队，亲自攻击并摧毁了它们 defending 的基地。</p><p>它还与Panzer-Wespe一起使用，对抗Glinda Knights，Panzer-Wespe作为火力支援单位，表明欧洲联合共和国与中东联邦之间的联盟。</p>`
    },
    {
        id: 4,
        name_zh: "布莱顿",
        name_en: "Brighton",
        model: "RPI-213",
        faction: "britannia",
        generation: "第7世代",
        type: "指挥官机",
        pilot: "德拉·巴雷塔、詹姆斯·埃罗",
        image: "https://s21.ax1x.com/2025/10/23/pVXElwD.webp",
        descriptiondescription: "布莱顿是由神圣不列颠帝国开发的Knightmare Frame。",
        specs: {
            height: "5.52m",
            weight: "10.04t",
            armor: "钨",
            power: "樱石能源块",
            developer: "神圣不列颠帝国",
            derivedFrom: "文森特"
        },
        equipment: {
            standard: [
                { name: "综合环境信息处理系统", description: "" },
                { name: "驾驶舱弹射系统", description: "利用火箭助推器使驾驶舱与KMF分离" },
                { name: "陆地滑行推进系统", description: "利用脚跟处的动力轮大幅提升KMF的机动性" }
            ]
        },
        weapons: {
            fixed: [
                { name: "1 × 左前臂安装刀片", description: "" },
                { name: "1 × 右前臂安装枪", description: "" },
                { name: "1 × 折叠轨道炮", description: "" },
                { name: "2 × 髋部安装飞燕爪牙", description: "" }
            ]
        },
        design: `<p>由克里斯蒂娜·帕拉设计，布莱顿是在文森特投产后开发的。它被设计为高级指挥机，旨在战斗中领导文森特小队，因此是一种重型和重装甲的Knightmare，用于前线战斗。它也重武装，携带前臂安装的枪和极其强大的折叠轨道炮用于远程战斗，同时前臂安装的刀片用于近战。</p>`,
        combat: `<p>在克里斯蒂娜·帕拉领导的20区开发，德拉·巴雷塔担任布莱顿的测试驾驶员。当皇帝用他的Geass将Zero的记忆赐予詹姆斯·埃罗作为追踪C.C.计划的一部分，并在俾斯麦·瓦尔德斯坦的命令下，克里斯蒂娜充当詹姆斯的联系人，并给了他激活密钥、布莱顿的代码以及如何偷窃并将其返回11区的指示。然而，德拉 unaware 该计划，并驾驶萨瑟兰空中型出击阻止盗窃。尽管布莱顿证明优于对手机器，但由于詹姆斯自己的犹豫和对"他的"记忆日益增长的不确定性，他被击落并在机器的 destruction 中死亡。尽管这台机器被摧毁无法修复，克里斯蒂娜告诉德拉她仍然有计划和数据，可以建造另一台机器。</p><p>大约30台布莱顿单位最终被推出并参与战斗，包括在第二次袭击东京定居点期间。</p>`
    },
    {
        id: 5,
        name_zh: "无赖",
        name_en: "Burai",
        model: "Type-1R",
        faction: "black-knights",
        generation: "第4世代",
        type: "量产机",
        pilot: "玉城真一郎、杉山健人、扇要、吉田斗、吉高南、井上直美、红月卡莲",
        images: [
            {
                url: "https://cdn4.winhlb.com/2025/10/23/68f9ffc327e0d.webp",
                description: "黑骑配色"
            },
            {
                url: "https://cdn4.winhlb.com/2025/10/23/68f9ffc350c62.webp", 
                description: "卡莲配色"
            }
        ],
        image: "https://cdn4.winhlb.com/2025/10/23/68f9ffc327e0d.webp",
        descriptiondescription: "无赖是由京都六家制造的格拉斯哥 Knightmare Frame 的改造版本，由黑色骑士团和日本解放战线操作。指定为 Type-1R，无赖在第一次黑色叛乱期间作为反不列颠抵抗组织的主要 Knightmare Frame。",
        specs: {
            height: "4.37m",
            weight: "7.48t",
            armor: "钨",
            power: "樱石能源块",
            developer: "京都六家",
            derivedFrom: "格拉斯哥",
            variants: "无赖 Zero 定制型、无赖 改、无赖 实验辐射波型、无赖 定制型"
        },
        equipment: {
            standard: [
                { name: "陆地滑行推进系统", description: "利用脚跟处的动力轮大幅提升KMF的机动性" },
                { name: "驾驶舱弹射系统", description: "利用火箭助推器使驾驶舱与KMF分离" },
                { name: "综合环境信息处理系统", description: "" }
            ]
        },
        weapons: {
            fixed: [
                { name: "2 × 胸部安装飞燕爪牙", description: "" },
                { name: "2 × 手部安装防护器", description: "" },
                { name: "1 × 躯干安装机枪", description: "" }
            ],
            handheld: [
                { name: "1 × 突击步枪", description: "" },
                { name: "1 × 腕部安装四联导弹发射器", description: "" },
                { name: "1 × 左肘安装Tonfa", description: "" }
            ]
        },
        design: `<p>虽然日本被神圣不列颠帝国轻易征服，但其投降最终是由枢木玄武首相突然去世而被迫促成的，当时日本军队仍渴望战斗。因此，即使七年后，当这个前国家（现更名为11区）已牢固处于不列颠控制之下时，该地区仍是抵抗运动的温床，前士兵和日本国民尽力进行反击。</p><p>抵抗方式之一由京都六家提供，这是一个秘密资助和支持反不列颠团体的日本实业家集团。利用其丰富的资源，京都六家制造了"Type-1R 无赖"，这是一种大量采用原不列颠使用的RPI-11格拉斯哥部件改造而成的Knightmare Frame。</p><p>Type-1R本质上仍是标准格拉斯哥Knightmare，没有进行任何能提升战斗性能的重大升级。因此，无赖仍属于第四世代Knightmare Frame。对原格拉斯哥设计的唯一显著改动是增加了武士风格头部附件（带有类似獠牙的颧骨，呈现日本鬼形象）和手部护甲（小型盾牌式护臂，使无赖能更好地防御直接近战攻击），但这些改动非常微小，最多算是外观装饰。此外，躯干安装的反人员机枪现在永久固定在胸部，而非存储在胸部舱室内需要先手动展开。</p><p>除上述增加部分外，无赖外观与格拉斯哥完全相同。无赖的配色方案因操作者而异：例如，日本解放战线使用的单位采用传统军绿色，而黑色骑士团操作的最常见无赖为灰色配褪色棕色辅助色。此外，红月卡莲驾驶定制红色无赖，很可能是由其早期使用的定制格拉斯哥升级而来。由于无赖主要是黑色骑士团使用的机体，其领袖Zero驾驶独特定制单位，配备红色头部模块和类似武士头盔的金色尖角，外观采用深灰色和更醒目的棕色辅助色。</p><p>武装方面，由于无赖大量沿用格拉斯哥设计，它配备了许多不列颠使用该老旧机体时的相同武器，包括突击步枪（带榴弹发射器）、巨型加农火箭炮、肘部安装的Tonfa（注意这些并非萨瑟兰使用的内置电击枪的眩晕Tonfa）。已知Type-1R专属武器是腕部导弹发射荚舱，最多可携带8枚导弹。除肘部Tonfa棍外，量产型Type-1R无赖未展示使用任何专门近战武器，这方面更适合"Type-1RC 无赖改"（四圣剑精英成员驾驶的改进型，是最早使用强大回旋刃刀的KMF）。</p><p>由于无赖本质上是回收再造的格拉斯哥，其性能仍处于第四世代Knightmare水平。这成为其劣势，因为与不列颠军队已全面使用的第五世代Knightmare（如RPI-13萨瑟兰及后来的RPI-209格洛斯特）相比，其整体性能和效能较差，在多数战斗情境中易被这些Knightmare压制和机动超越。因此，无赖更依赖其作为量产机的数量优势而非绝对战斗效率，且基于老旧的格拉斯哥平台制造，使京都六家能更经济地大规模生产，无需投资技术世代更高、更现代强大但量产成本过高的Knightmare。</p>`
    },
    {
        id: 6,
        name_zh: "无赖",
        name_en: "Burai",
        model: "Type-1R",
        faction: "japan",
        generation: "第4世代",
        type: "量产机",
        pilot: "/",
        image: "https://s21.ax1x.com/2025/10/23/pVXEnQx.webp",
        descriptiondescription: "无赖是由京都六家制造的格拉斯哥 Knightmare Frame 的改造版本，由黑色骑士团和日本解放战线操作。指定为 Type-1R，无赖在第一次黑色叛乱期间作为反不列颠抵抗组织的主要 Knightmare Frame。",
        specs: {
            height: "4.37m",
            weight: "7.48t",
            armor: "钨",
            power: "樱石能源块",
            developer: "京都六家",
            derivedFrom: "格拉斯哥",
            variants: "无赖 Zero 定制型、无赖 改、无赖 实验辐射波型、无赖 定制型"
        },
        equipment: {
            standard: [
                { name: "陆地滑行推进系统", description: "利用脚跟处的动力轮大幅提升KMF的机动性" },
                { name: "驾驶舱弹射系统", description: "利用火箭助推器使驾驶舱与KMF分离" },
                { name: "综合环境信息处理系统", description: "" }
            ]
        },
        weapons: {
            fixed: [
                { name: "2 × 胸部安装飞燕爪牙", description: "" },
                { name: "2 × 手部安装防护器", description: "" },
                { name: "1 × 躯干安装机枪", description: "" }
            ],
            handheld: [
                { name: "1 × 突击步枪", description: "" },
                { name: "1 × 腕部安装四联导弹发射器", description: "" },
                { name: "1 × 左肘安装Tonfa", description: "" }
            ]
        },
        design: `<p>虽然日本被神圣不列颠帝国轻易征服，但其投降最终是由枢木玄武首相突然去世而被迫促成的，当时日本军队仍渴望战斗。因此，即使七年后，当这个前国家（现更名为11区）已牢固处于不列颠控制之下时，该地区仍是抵抗运动的温床，前士兵和日本国民尽力进行反击。</p><p>抵抗方式之一由京都六家提供，这是一个秘密资助和支持反不列颠团体的日本实业家集团。利用其丰富的资源，京都六家制造了"Type-1R 无赖"，这是一种大量采用原不列颠使用的RPI-11格拉斯哥部件改造而成的Knightmare Frame。</p><p>Type-1R本质上仍是标准格拉斯哥Knightmare，没有进行任何能提升战斗性能的重大升级。因此，无赖仍属于第四世代Knightmare Frame。对原格拉斯哥设计的唯一显著改动是增加了武士风格头部附件（带有类似獠牙的颧骨，呈现日本鬼形象）和手部护甲（小型盾牌式护臂，使无赖能更好地防御直接近战攻击），但这些改动非常微小，最多算是外观装饰。此外，躯干安装的反人员机枪现在永久固定在胸部，而非存储在胸部舱室内需要先手动展开。</p><p>除上述增加部分外，无赖外观与格拉斯哥完全相同。无赖的配色方案因操作者而异：例如，日本解放战线使用的单位采用传统军绿色，而黑色骑士团操作的最常见无赖为灰色配褪色棕色辅助色。此外，红月卡莲驾驶定制红色无赖，很可能是由其早期使用的定制格拉斯哥升级而来。由于无赖主要是黑色骑士团使用的机体，其领袖Zero驾驶独特定制单位，配备红色头部模块和类似武士头盔的金色尖角，外观采用深灰色和更醒目的棕色辅助色。</p><p>武装方面，由于无赖大量沿用格拉斯哥设计，它配备了许多不列颠使用该老旧机体时的相同武器，包括突击步枪（带榴弹发射器）、巨型加农火箭炮、肘部安装的Tonfa（注意这些并非萨瑟兰使用的内置电击枪的眩晕Tonfa）。已知Type-1R专属武器是腕部导弹发射荚舱，最多可携带8枚导弹。除肘部Tonfa棍外，量产型Type-1R无赖未展示使用任何专门近战武器，这方面更适合"Type-1RC 无赖改"（四圣剑精英成员驾驶的改进型，是最早使用强大回旋刃刀的KMF）。</p><p>由于无赖本质上是回收再造的格拉斯哥，其性能仍处于第四世代Knightmare水平。这成为其劣势，因为与不列颠军队已全面使用的第五世代Knightmare（如RPI-13萨瑟兰及后来的RPI-209格洛斯特）相比，其整体性能和效能较差，在多数战斗情境中易被这些Knightmare压制和机动超越。因此，无赖更依赖其作为量产机的数量优势而非绝对战斗效率，且基于老旧的格拉斯哥平台制造，使京都六家能更经济地大规模生产，无需投资技术世代更高、更现代强大但量产成本过高的Knightmare。</p>`
    },
    {
        id: 7,
        name_zh: "无赖改",
        name_en: "Burai Kai",
        model: "Type-1RC",
        faction: "japan",
        generation: "第4世代",
        type: "专用机",
        pilot: "藤堂镜志朗、朝比奈省悟、千叶凪沙、仙波崚河、卜部巧雪",
        images: [
            {
                url: "https://s21.ax1x.com/2025/10/25/pVXwGqK.webp",
                description: "四圣剑配色"
            },
            {
                url: "https://s21.ax1x.com/2025/10/25/pVXwYVO.webp", 
                description: "藤堂配色"
            }
        ],
        image: "https://cdn4.winhlb.com/2025/10/23/68f9fb561e62a.webp",
        descriptiondescription: "无赖改是Type-1R无赖Knightmare Frame的优化版本，为日本解放战线的精英突击单位四圣剑所创建。",
        specs: {
            height: "4.71m",
            weight: "7.54t",
            armor: "钨",
            power: "樱石能源块",
            developer: "京都六家",
            derivedFrom: "格拉斯哥、无赖"
        },
        equipment: {
            standard: [
                { name: "陆地滑行推进系统", description: "利用脚跟处的动力轮大幅提升KMF的机动性" },
                { name: "驾驶舱弹射系统", description: "利用火箭助推器使驾驶舱与KMF分离" },
                { name: "综合环境信息处理系统", description: "" }
            ]
        },
        weapons: {
            fixed: [
                { name: "2 × 胸部安装飞燕爪牙", description: "" },
                { name: "2 × 手部防护器", description: "" },
                { name: "1 × 躯干安装机枪", description: "" }
            ],
            handheld: [
                { name: "1 × 回旋刃刀", description: "一种能够切割大多数KMF金属外壳的超高温旋转刀片" },
                { name: "1 × 突击步枪", description: "" }
            ]
        },
        design: `<p>无赖改是对基础Type-1R单位最显著的改动是在头部后方增加了一对长长的拖曳式天线。与原始无赖不同，其性能得到了更好的升级，使其能够更好地应对更高规格的Knightmare，例如神圣不列颠帝国的精英单位RPI-209格洛斯特。然而，尽管有这些升级，改型仍属于第四世代范畴，其作为高效战斗机的成功更可能归功于相应驾驶员的技能。</p><p>除上述头部增加部分外，无赖改保持了与原始无赖完全相同的外观，包括胸部安装的反人员机枪和固定的手部护甲。与标准的JLF无赖单位不同，四圣剑成员使用的改型采用米色配棕色辅助装饰条，而他们的领导者藤堂镜志朗驾驶的定制白色无赖改在战斗中极易辨认。</p><p>虽然能够使用与标准无赖相同的武器，但无赖改的主要武器是回旋刃刀（花天狂骨），一种强大的链锯刃武士刀，其强度几乎与不列颠的MVS（微波振动剑）技术相当，从而使改型成为一款专注于近距离、反Knightmare战斗的机体。</p>`,
        combat: `<p>无赖改仅在2017年成田攻防战中登场。在藤堂和四圣剑的驾驶下，它们成为一股不可小觑的力量，能够摧毁部分不列颠Knightmare部队，并阻挡住柯内莉亚的皇家卫队以及吉尔福德和安德烈亚斯·达顿。然而，在ZERO和黑色骑士团撤退后，他们被迫放弃无赖改机体，与JLF的剩余幸存者一同撤退。</p><p>尽管被证明是一款出色的机体，所有五台无赖改单位在日本解放战线于成田之战撤退后被遗弃，四圣剑的驾驶员在加入黑色骑士团后最终升级至更优秀的月下。</p>`
    },
    {
        id: 8,
        name_zh: "无赖 ZERO型",
        name_en: "Burai Zero Custom",
        model: "Type-10R",
        faction: "black-knights",
        generation: "第4世代",
        type: "专用机",
        pilot: "Zero、C.C.",
        image: "https://cdn4.winhlb.com/2025/10/23/68f9fb565879d.webp",
        descriptiondescription: "无赖 Zero 定制型是黑色骑士团领袖Zero使用的个人无赖机体。",
        specs: {
            height: "4.56m",
            weight: "7.53t",
            armor: "钨",
            power: "樱石能源块",
            developer: "京都六家",
            derivedFrom: "无赖"
        },
        equipment: {
            standard: [
                { name: "陆地滑行推进系统", description: "利用脚跟处的动力轮大幅提升KMF的机动性" },
                { name: "驾驶舱弹射系统", description: "利用火箭助推器使驾驶舱与KMF分离" },
                { name: "综合环境信息处理系统", description: "" }
            ]
        },
        weapons: {
            fixed: [
                { name: "2 × 胸部安装飞燕爪牙", description: "" },
                { name: "2 × 手部安装防护器", description: "" },
                { name: "1 × 躯干安装机枪", description: "" }
            ],
            handheld: [
                { name: "1 × 突击步枪", description: "" },
                { name: "1 × 腕部安装四联导弹发射器", description: "" }
            ],
            optional: [
                { name: "1 × 防暴盾", description: "" }
            ]
        },
        design: `<p>尽管标识不同，Zero定制无赖在功能上与标准模型无赖相同。主要区别在于其头部被替换为独特的头部模块。</p>`,
        combat: `<p>Zero首次在成田战斗中使用这些机器之一。</p>`
    },
    {
        id: 9,
        name_zh: "加拉哈德",
        name_en: "Galahad",
        model: "RZA-1A",
        faction: "britannia",
        generation: "第7世代",
        type: "专用机",
        pilot: "俾斯麦·瓦尔德斯坦",
        image: "https://cdn4.winhlb.com/2025/10/23/68f9fb6389204.webp",
        description: "加拉哈德是圆桌骑士第一骑士俾斯麦·瓦尔德斯坦驾驶的Knightmare Frame。它是第七世代KMF，基于高文设计，体型是普通Knightmare的两倍，装备有手指飞燕爪牙、能量护盾和强大的埃克斯卡利伯微波振动剑。",
        specs: {
            height: "7.20m",
            weight: "15.2t",
            armor: "钨",
            power: "樱石能源块",
            developer: "神圣不列颠帝国",
            derivedFrom: "高文",
            development: "Tristan Divider"
        },
        equipment: {
            standard: [
                { name: "事实球传感器", description: "" },
                { name: "光辉盾牌系统", description: "" },
                { name: "陆地滑行推进系统", description: "利用脚跟处的动力轮大幅提升KMF的机动性" },
                { name: "驾驶舱弹射系统", description: "利用火箭助推器使驾驶舱与KMF分离" },
                { name: "集成浮空系统", description: "" }
            ]
        },
        weapons: {
            fixed: [
                { name: "10x 手指安装飞燕爪牙", description: "" }
            ],
            optional: [
                { name: "1x 骑枪", description: "" },
                { name: "1x \"埃克斯卡利伯\"微波振动剑", description: "" }
            ]
        },
        design: `<p>它的装甲是浅紫色和黑色，框架设计是高文的变体。加拉哈德拥有许多与原机相似的特征，例如内置陆地滑行轮、手指配备微型飞燕爪牙的手部，以及体型是普通Knightmare的两倍。它装备有能量护盾，并在背部携带一把名为埃克斯卡利伯的微波振动剑，该剑比Knightmare本身还要大。剑鞘有一个额外的陆地滑行轮，并作为加拉哈德的浮空系统。埃克斯卡利伯强大到可以一击突破装甲，并能生成一个能量场，阻挡并切片强大的能量爆炸，例如神虎的重子炮。事实上，它如此强大，当它装备在特里斯坦·迪瓦ider上时，原剑的一半能够突破神崎鸥的绝对防御领域。在获得埃克斯卡利伯之前，加拉哈德使用一把大型骑枪进行战斗。</p><p>其输出大大超过平均Knightmare Frame，只有俾斯麦能够驾驭加拉哈德。</p>`,
        combat: `<p>在加拉哈德部署之前，俾斯麦请求Oiaguro Zevon的帮助，在黑色骑士团入侵11区之前监督其改进，这是在联合国联邦成立之后。</p><p>加拉哈德首次与俾斯麦·瓦尔德斯坦一起出现，他们准备应对即将对东京定居点的攻击。加拉哈德与珀西瓦尔一起，与作为指挥官的星刻领导的黑色骑士团交战。</p><p>加拉哈德被 Suzaku 的 Lancelot Albion 摧毁，在剩余的圆桌骑士试图推翻 Lelouch 的权力之后。它连同埃克斯卡利伯被切成两半。尽管加拉哈德丢失了，但其剑的两半落在 Gino Weinberg 损坏的特里斯坦旁边，并被回收用于 Gino 的特里斯坦·迪瓦ider。</p>`
    },
    {
        id: 10,
        name_zh: "甘尼米德（木卫三）",
        name_en: "Ganymede",
        model: "YF6-X7K/E",
        faction: "britannia",
        generation: "第3世代",
        type: "试作机",
        pilot: "玛丽安娜·vi·不列颠、鲁路修·vi·不列颠、枢木朱雀、妮娜·爱因斯坦",
        image: "https://cdn4.winhlb.com/2025/10/23/68f9fb662986d.webp",
        description: "甘尼米德是第三世代Knightmare Frame，由阿什福德基金会开发。它由外部电池供电，是后来Knightmare设计的基础。至少一台被保留在阿什福德学院用于展览。",
        specs: {
            height: "6.32m",
            weight: "7.09t",
            armor: "钨",
            power: "电缆供电/外部电池",
            developer: "阿什福德基金会",
            derivedFrom: "",
            development: "格拉斯哥"
        },
        equipment: {
            standard: []
        },
        weapons: {
            fixed: [],
            handheld: [],
            optional: []
        },
        design: `<p>在尤格德拉希尔驱动开发之前不久创建，甘尼米德由大型外部电池供电，限制了其航程和操作时间。但尽管有这些缺点，甘尼米德构成了此后建造的几乎所有Knightmare Frame的基础。这归功于其基本设计的有效性，以及其熟练的测试驾驶员玛丽安娜·vi·不列颠。她不可思议的能力为她赢得了"闪光的玛丽安娜"的绰号，后来她成为了皇帝查尔斯·zi·不列颠的众多妻子之一。</p>`,
        combat: `<p>甘尼米德是在第三世代Knightmare Frame期间开发的，它是新兴的阿什福德基金会的创意。至少一台甘尼米德（可能是玛丽安娜使用的同一单位）被阿什福德家族保留，存放在其在11区运营的学院中。这台甘尼米德每年一次从存储中取出，用于阿什福德学院学校节日的展览。在这些场合，甘尼米德通常由玛丽安娜的儿子鲁路修驾驶，但在2017年，鲁路修将这个角色让给了他的童年朋友枢木朱雀。</p><p>在第一季结束时，妮娜·爱因斯坦在甘尼米德上安装了一个樱石增强的核弹。然而，炸弹未能爆炸。甘尼米德的最终命运未知，但可能不再在阿什福德学院，因为学校开始使用MR-1进行年度节日，并且因为在一次讨论中，米蕾表示妮娜正试图"完成"甘尼米德。</p>`
    },
    {
        id: 11,
        name_zh: "加雷斯",
        name_en: "Gareth",
        model: "RPI-V4L",
        faction: "britannia",
        generation: "第7世代",
        type: "量产机",
        pilot: "克劳迪奥·S·达顿、大卫·T·达顿、埃德加·N·达顿、玛丽卡·索雷西、皇家卫队（部分鲁路修的皇家卫队）",
        image: "https://cdn4.winhlb.com/2025/10/23/68f9fb67e516f.webp",
        description: "加雷斯是高文的量产型模型，由神圣不列颠帝国开发，适用于远程和中程交战，预计成为不列颠军队的主力。",
        specs: {
            height: "6.94m",
            weight: "14.78t",
            armor: "钨",
            power: "樱石能源块",
            developer: "神圣不列颠帝国",
            derivedFrom: "高文、阿格拉万、格洛斯特"
        },
        equipment: {
            standard: [
                { name: "驾驶舱弹射系统", description: "利用火箭助推器使驾驶舱与KMF分离" },
                { name: "集成浮空系统", description: "" }
            ]
        },
        weapons: {
            fixed: [
                { name: "2x 臂装重子炮", description: "" },
                { name: "2x 肩装三管机炮", description: "" },
                { name: "14管导弹发射器", description: "" },
                { name: "8x 髋装飞燕爪牙", description: "" }
            ]
        },
        design: `<p>尽管它衍生自高文，但与其前身相比，它更适合远程炮击角色。与高文不同，它的许多功能被移除，如德鲁伊系统、五指操纵器、双座驾驶舱和陆地滑行轮。这大大降低了生产和制造成本。其重子炮（主要武器）直接附着在手腕上代替手部。它有八个飞燕爪牙，安装在髋部的两个四管发射器中。它还有十四个导弹发射器，每条腿上四个，胸部六个。最后，它有两个三管机炮安装在肩上。像高文一样，它有一个集成浮空系统。</p>`,
        combat: `<p>格拉斯顿骑士团在第二次东京战斗前从格洛斯特切换至加雷斯模型，这是它们首次部署。加雷斯在鲁路修·vi·不列颠皇帝统治期间也被广泛使用，适用于远程和中程交战，预计成为不列颠军队的主力，以补充其近战表亲文森特·瓦德，后者在当时占其Knightmare部队的一半。</p>`
    },
    {
        id: 12,
        name_zh: "高文",
        name_en: "Gawain",
        model: "IFX-V3D1",
        faction: "black-knights",
        generation: "第6世代",
        type: "试作机",
        pilot: "Zero、C.C.",
        image: "https://cdn4.winhlb.com/2025/10/23/68f9fc4e2b7d5.webp",
        description: "高文是泽文家族私下开发的原型Knightmare Frame，体型比大多数Knightmare大50%，重量是两倍以上，拥有双座驾驶舱，装备有集成浮空系统、重子炮和德鲁伊系统。",
        specs: {
            height: "6.57m",
            weight: "14.57t",
            armor: "钨",
            power: "樱石能源块",
            developer: "神圣不列颠帝国、泽文家族",
            derivedFrom: "",
            development: "阿格拉万、加拉哈德、加雷斯、斑鸠、神崎鸥",
            variants: "高文天守、高文Rezero、高文LDM"
        },
        equipment: {
            standard: [
                { name: "德鲁伊系统", description: "" },
                { name: "杰夫干扰器", description: "" },
                { name: "集成浮空系统", description: "" },
                { name: "陆地滑行推进系统", description: "利用脚跟处的动力轮大幅提升KMF的机动性" }
            ]
        },
        weapons: {
            fixed: [
                { name: "10x 手指安装飞燕爪牙", description: "" },
                { name: "2x 肩装重子炮", description: "" }
            ]
        },
        design: `<p>高文装备有原型集成浮空系统，使其能够持续飞行。它是第一款使用浮空系统的Knightmare，也是第一款使用重子武器的机器。其手指是微型飞燕爪牙，并拥有一对肩装重子炮，可以发射持续破坏性能量流，射程极远。该Knightmare最初不完整，其重子炮由于开花效应而射击不稳定。该单位由黑色骑士团的科学天才拉克夏塔·恰拉完善，她使用其杰夫干扰器技术来控制重子炮的不稳定火力。作为附带好处，干扰器的自然干扰特性也使高文对雷达隐形。其实验性德鲁伊系统最初旨在调查思想电梯的结构和功能，允许高文绘制敌方单位的可能移动，并标记其为强大的指挥单位。尽管有其优势，高文是一个相当慢的单位，因此容易被更小、更快的Knightmare机动超越，这在高文和柯内莉亚的格洛斯特在黑色叛乱中的战斗中清晰可见。</p>`,
        combat: `<p>高文被运送至第一艘不列颠飞艇阿瓦隆上，旨在用其原型重子炮伏击黑色骑士团（后者反过来为兰斯洛特设下埋伏）。不久后，他们将高文移至神根岛以研究思想电梯。然而，在高文被用于此项目之前，Zero（鲁路修·兰佩鲁基）和红月卡莲偷走了高文以逃离该岛。尽管因此损失了大量新技术，修奈泽尔对高文的盗窃不以为意，认为它仅仅是一个"测试模型"。</p><p>在其技术被拉克夏塔·恰拉完善后，它成为鲁路修和C.C.的个人Knightmare；C.C.负责驾驶，而Zero操作武器并发布命令。完善后Knightmare的力量在福冈基地战斗中得以展示，鲁路修和C.C.与枢木朱雀短暂联手逮捕泽崎敦，完全摧毁了其在战斗中的中国盟友。</p><p>高文后来在入侵东京定居点的计划中证明至关重要，单枪匹马消灭了该区域不列颠的全部空中支援。高文最初在与柯内莉亚及其格洛斯特的对决中遇到对手，仅通过鲁路修操纵安德烈亚斯·达顿而获救。高文后来被迫与杰里米亚·哥特瓦尔德和齐格菲，第一骑士巨型堡垒进行决斗。当齐格菲被证明过于强大无法击败时，C.C.在将鲁路修放在神根岛以拯救娜娜莉后，被迫牺牲高文以阻止巨型堡垒，使用其飞燕爪牙缠住齐格菲并将两者拖入太平洋的压碎深度。</p><p>尽管框架损坏无法修复，其德鲁伊系统和重子炮被回收。两项技术都被纳入黑色骑士团的旗舰斑鸠。德鲁伊系统也被拉克夏塔改编用于控制Zero个人Knightmare神崎鸥的绝对防御领域系统。</p>`
    },
    {
        id: 13,
        name_zh: "月下",
        name_en: "Gekka",
        model: "Type-03F",
        faction: "black-knights",
        generation: "第7世代",
        type: "试作机",
        pilot: "朝比奈省悟、千叶凪沙、仙波崚河、卜部巧雪、Gassan",
        image: "https://cdn4.winhlb.com/2025/10/23/68f9fc4fbaf6b.webp",
        description: "月下是基于红莲二式和月下原型的新模型，虽计划量产但仅生产五台作为原型机，拥有第六至第七世代技术，优于不列颠的当前量产模型萨瑟兰和格洛斯特。",
        specs: {
            height: "4.45m",
            weight: "7.92t",
            armor: "钨",
            power: "樱石能源块",
            developer: "贾巴尔普尔研究中心",
            derivedFrom: "红莲二式、月下原型",
            development: "晓量产型",
            variants: "Gekka (Todoh version)、Gekka (Full Moon Type)、Gekka Custom、Gekka Alonso、Gekka Shiden、Gekka Narisuna、Gekka (Crow version)"
        },
        equipment: {
            standard: [
                { name: "驾驶舱弹射系统", description: "利用火箭助推器使驾驶舱与KMF分离" },
                { name: "陆地滑行推进系统", description: "利用脚跟处的动力轮大幅提升KMF的机动性" },
                { name: "背部内置箔条烟雾释放系统", description: "" }
            ]
        },
        weapons: {
            fixed: [
                { name: "1x 飞燕爪牙型飞燕爪牙", description: "" }
            ],
            handheld: [
                { name: "1x 回旋刃刀", description: "一种能够切割大多数KMF金属外壳的超高温旋转刀片" },
                { name: "1x 右臂装定制手枪", description: "" },
                { name: "1x 右臂装火箭发射器", description: "" }
            ]
        },
        design: `<p>月下与红莲二式在几个方面有所不同。它拥有灰色装甲而非红色，头部单元被替换为单眼模型。它也不具备辐射波振动器，左臂嵌入的加农炮被替换为可选的全自动步枪，能够击落Knightmare框架以及更快的物体如导弹和空中弹药载具。其主要武器是花天狂骨刀，一种延长的加热链剑，旨在比传统刀片更轻松地切割Knightmare，尽管它不如MVS有效。月下装备有"箔条烟雾"释放器，能够释放箔条和烟雾屏。这允许干扰电子设备和视觉跟踪，从而实现相对隐秘的撤退。</p>`,
        combat: ``
    },
    {
        id: 14,
        name_zh: "月下 藤堂型",
        name_en: "Gekka (Todoh version)",
        model: "Type-3T",
        faction: "black-knights",
        generation: "第7世代",
        type: "专用机",
        pilot: "藤堂镜志朗",
        image: "https://cdn4.winhlb.com/2025/10/23/68f9fc30f04b5.webp",
        description: "月下藤堂版是藤堂镜志朗个人使用的定制月下机体。",
        specs: {
            height: "4.45m",
            weight: "7.92t",
            armor: "钨",
            power: "樱石能源块",
            developer: "京都六家",
            derivedFrom: "月下"
        },
        equipment: {
            standard: [
                { name: "驾驶舱弹射系统", description: "利用火箭助推器使驾驶舱与KMF分离" },
                { name: "陆地滑行推进系统", description: "利用脚跟处的动力轮大幅提升KMF的机动性" },
                { name: "箔条烟雾释放系统", description: "" }
            ]
        },
        weapons: {
            fixed: [
                { name: "2x 飞燕爪牙", description: "" },
                { name: "1x 左臂装定制手枪", description: "" }
            ],
            handheld: [
                { name: "1x 制动刀", description: "" }
            ]
        },
        design: `<p>藤堂的月下与红莲二式在几个方面有所不同，并且与普通月下非常相似，尽管输出功率更高。它拥有黑色装甲而非红色，头部单元被替换为单眼模型。它也不具备辐射发射器，左臂嵌入的加农炮被替换为可选的全自动步枪，能够击落Knightmare框架以及更快的物体如导弹和空中弹药载具。其主要武器是制动刀（Brake Sword），花天狂骨刀的一种变体。它是一种延长的加热链剑，旨在比传统刀片更轻松地切割Knightmare。它还在刀柄上安装了一个飞燕爪牙，以及刀背上的几个推进器，允许它操纵劈砍方向或机动Knightmare本身。藤堂的月下还装备有"箔条烟雾"释放器，能够释放箔条和烟雾屏。这允许干扰电子设备和视觉跟踪，从而实现相对隐秘的撤退。</p>`,
        combat: ``
    },
    {
        id: 15,
        name_zh: "格拉斯哥",
        name_en: "Glasgow",
        model: "RPI-11",
        faction: "britannia",
        generation: "第4世代",
        type: "量产机",
        pilot: "红月卡莲、Ryo Sayama、Zi Dien、Disel、Damian Hemworth",
        images: [
            {
                url: "https://cdn4.winhlb.com/2025/10/23/68f9fc543d8b9.webp",
                description: "标准配色"
            },
            {
                url: "https://cdn4.winhlb.com/2025/10/23/68f9fc30d8e99.webp",
                description: "卡莲配色"
            }
        ],
        image: "img/16.webp",
        description: "格拉斯哥是第四世代Knightmare Frame，是神圣不列颠帝国生产的第一个量产模型，在日本入侵中提供了压倒性战术优势。",
        specs: {
            height: "4.24m",
            weight: "7.35t",
            armor: "钨",
            power: "樱石能源块",
            developer: "神圣不列颠帝国",
            derivedFrom: "甘尼米德",
            development: "萨瑟兰、Portman、Somerset、Prytwen、Raiko、无赖定制型",
            variants: "无赖、Knightpolice、格拉斯哥警卫型、格拉斯哥Orpheus定制型"
        },
        equipment: {
            standard: [
                { name: "事实球传感器", description: "" },
                { name: "驾驶舱弹射系统", description: "" },
                { name: "陆地滑行推进系统", description: "" }
            ]
        },
        weapons: {
            fixed: [
                { name: "2x 飞燕爪牙", description: "" }
            ],
            handheld: [
                { name: "1x 突击步枪", description: "" }
            ],
            optional: [
                { name: "1x 反人员机枪", description: "" },
                { name: "1x 大型加农炮", description: "" }
            ]
        },
        design: `<p>受甘尼米德原型机成功的启发，神圣不列颠帝国开始研究将Knightmare Frame用于军事行动。他们的成果是RPI-11格拉斯哥，第一款具备战斗能力的Knightmare。在甘尼米德奠定的基础上，格拉斯哥依靠其小型、轻量化的框架和车身装甲，以及陆地滑行轮进行高速战斗，使其能够侧翼包抄地面部队如坦克和装甲运兵车。</p><p>格拉斯哥还引入了飞燕爪牙，一种有线投射武器，既可以作为抓钩，也可以帮助Knightmare从空中运输工具安全降落，这成为未来几乎所有Knightmare Frame的标准装备。格拉斯哥的武装还包括一把带内置榴弹发射器的突击步枪、一门巨型加农炮火箭发射器和肘部安装的Tonfa棍。这些武器，连同许多其他武器，将成为后来多年大多数量产型Knightmare Frame的标准装备。</p>`,
        combat: `<p>格拉斯哥的效力在a.t.b. 2010年不列颠入侵日本期间得到证明。格拉斯哥的参与使这场短暂的战争取得了彻底胜利，允许不列颠轻松击败日本军队并接管这个岛国，随后将其更名为11区。入侵七年后，格拉斯哥仍被视为可敬但非常过时，并逐渐停产和退役，以支持更新的第五世代RPI-13萨瑟兰。许多格拉斯哥单位被改装成警察用的Knightpolice，而格拉斯哥的普及意味着它们经常落入反不列颠叛乱团体手中，如黑色骑士团和日本解放战线，甚至落入地下犯罪集团手中。</p><p>格拉斯哥Knightmare被各种日本抵抗组织用作几种"新"设计的基础，包括由京都六家开发的Type-1R无赖和Type-1RC无赖改。一些单位甚至被回收用来形成一种强大的机动火炮加农炮，称为雷公炮，通过组合4台格拉斯哥或无赖制成。在驾驶红莲之前，红月卡莲在系列开始时使用了一台定制的红色格拉斯哥，该机在兰斯洛特首次战斗部署时被损坏。然而，在剧集《Refrain》中，它被另一台使用无赖部件修改的红色格拉斯哥所取代。</p>`
    },
    {
        id: 16,
        name_zh: "格洛斯特",
        name_en: "Gloucester",
        model: "RPI-209",
        faction: "britannia",
        generation: "第5世代",
        type: "量产机",
        pilot: "尤菲米娅·li·不列颠、吉尔伯特·G·P·吉尔福德、安德烈亚斯·达顿、阿尔弗雷德·G·达顿、巴特·L·达顿、克劳迪奥·S·达顿、大卫·T·达顿、埃德加·N·达顿、基诺·温伯格、卢西亚诺·布拉德利",
        images: [
            {
                url: "https://cdn4.winhlb.com/2025/10/27/68fe91e69fcbd.webp",
                description: "标准版"
            },
            {
                url: "https://cdn4.winhlb.com/2025/10/27/68fe91e785321.webp",
                description: "带披风标准版"
            },
            {
                url: "https://cdn4.winhlb.com/2025/10/27/68fe91e69bc35.webp",
                description: "皇家卫队配色"
            },
            {
                url: "https://cdn4.winhlb.com/2025/10/27/68fe91e69aa2a.webp",
                description: "格拉斯顿骑士团"
            }
        ],
        image: "img/16.webp",
        description: "第五代RPI-209格洛斯特是专注于近战的萨瑟兰改造型。普通模型涂装为平坦的暗紫色，但一些军官单位有定制涂装。在ZERO的黑色叛乱失败后，格洛斯特取代了大部分萨瑟兰作为不列颠的主要Knightmare。",
        specs: {
            height: "4.29m",
            weight: "7.75t",
            armor: "钨",
            power: "由能源填充器驱动的尤格德拉希尔驱动",
            developer: "神圣不列颠帝国",
            derivedFrom: "萨瑟兰"
        },
        equipment: {
            standard: [
                { name: "事实球传感器", description: "" },
                { name: "陆地滑行推进系统", description: "利用脚跟处的动力轮大幅提升KMF的机动性" },
                { name: "驾驶舱弹射系统", description: "利用火箭助推器使驾驶舱与KMF分离" },
                { name: "敌我识别应答器", description: "" }
            ],
            optional: [
                { name: "沙地板", description: "提供在沙漠地形上的改进牵引力" },
                { name: "浮空系统", description: "提供飞行能力" }
            ]
        },
        weapons: {
            fixed: [
                { name: "2 × 胸部安装飞燕爪牙", description: "" }
            ],
            handheld: [
                { name: "1 × 突击步枪", description: "" },
                { name: "1 × 电磁骑枪", description: "包含扩展叉，可以捕获和解除敌人武器" },
                { name: "多重混沌地雷", description: "" }
            ],
            optional: [
                { name: "1 × 躯干安装反人员机枪", description: "" },
                { name: "2 × Sattel Waffen导弹发射器", description: "" },
                { name: "2 × 微波振动剑", description: "" },
                { name: "1 × 反Knightmare狙击步枪", description: "" },
                { name: "1 × 巨型加农炮", description: "" }
            ]
        },
        design: `<p>格洛斯特具备增强的徒手战斗能力，除了标准萨瑟兰装备外，还使用大型骑枪，并且为了进一步融入中世纪骑士主题，偶尔披有披风。柯内莉亚、她的骑士吉尔福德和格拉斯顿骑士团习惯性地为他们的单位装备披风，尽管安德烈亚斯·达顿没有。这种独特的骑枪，被称为"电磁骑枪"，包含一组在四个侧面的扩展叉，可以捕获和解除敌人武器。结合格洛斯特的高机动性，这种可怕的武器可用于直接穿透敌人Knightmare的驾驶舱，杀死驾驶员并防止他通过标准弹射系统逃脱。</p><p>在18区战役期间，一些格洛斯特装备了类似于Z-01兰斯洛特在成田之战中使用的沙地板。此外，它可以装备可选的浮空单元背包，因此改变机体型号为RPI-209FA格洛斯特空中型。</p><p>例外地，格拉斯顿骑士团单位被显示装备两个"Sattel Waffen"五管导弹发射器，附着在驾驶舱两侧，而吉尔福德的格洛斯特配备了一对微波振动剑，存储在黑色剑鞘中，位于驾驶舱两侧。</p>`,
        combat: `<p>在ZERO的黑色叛乱失败后，格洛斯特取代了大部分萨瑟兰作为不列颠的主要Knightmare，并在18区战役等行动中部署。</p>`
    }
];
