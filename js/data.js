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
                description: "黑色骑士团配色"
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
        name_zh: "盖尼米德（木卫三）",
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
        image: "https://cdn4.winhlb.com/2025/10/23/68f9fc543d8b9.webp",
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
        image: "https://cdn4.winhlb.com/2025/10/27/68fe91e69fcbd.webp",
        description: "第五代RPI-209格洛斯特是专注于近战的萨瑟兰改造型。普通模型涂装为平坦的暗紫色，但一些军官单位有定制涂装。在ZERO的黑色叛乱失败后，格洛斯特取代了大部分萨瑟兰作为不列颠的主要Knightmare。",
        specs: {
            height: "4.29m",
            weight: "7.75t",
            armor: "钨",
            power: "樱石能源块",
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
    },
    {
        id: 17,
        name_zh: "格洛斯特 柯内莉亚型",
        name_en: "Gloucester (Cornelia version)",
        model: "RPI-00/SC",
        faction: "britannia",
        generation: "第5世代",
        type: "专用机",
        pilot: "柯内莉亚·li·不列颠",
        image: "https://cdn4.winhlb.com/2025/10/27/68fede84e7ef9.webp",
        description: "格洛斯特（柯内莉亚版本）是专门为柯内莉亚·li·不列颠作为高端KMF驾驶员和指挥官技能定制设计的模型。与标准格洛斯特不同，型号为RPI-00/SC，其最显著的外观出现在成田战斗期间，并在柯内莉亚参与的每个其他主要战斗中出现。该单位在第一季结束时的黑色叛乱中严重受损，当时安德烈亚斯·达顿在鲁路修Geass的影响下，将他的电磁骑枪投向它，刺穿驾驶舱，重伤柯内莉亚，并永久退役该单位。",
        specs: {
            height: "4.84m",
            weight: "7.75t",
            armor: "钨",
            power: "樱石能源块",
            developer: "神圣不列颠帝国",
            derivedFrom: "格洛斯特、萨瑟兰"
        },
        equipment: {
            standard: [
                { name: "事实球传感器", description: "" },
                { name: "陆地滑行推进系统", description: "利用脚跟处的动力轮大幅提升KMF的机动性" },
                { name: "驾驶舱弹射系统", description: "利用火箭助推器使驾驶舱与KMF分离" },
                { name: "敌我识别应答器系统", description: "" }
            ],
            optional: [
                { name: "沙地板", description: "提供在沙漠地形上的改进牵引力" }
            ]
        },
        weapons: {
            fixed: [
                { name: "2 × 胸部安装飞燕爪牙", description: "" },
                { name: "1 × 躯干安装反人员机枪", description: "存储在胸部" }
            ],
            handheld: [
                { name: "1 × 突击步枪", description: "" },
                { name: "1 × 电磁骑枪", description: "包含扩展叉，可以捕获和解除敌人武器" }
            ]
        },
        design: `<p>它不同于普通格洛斯特，头部两侧有角状天线阵列，以及更装饰性的腰部装甲。颜色是更亮、更鲜艳的紫色，披风白色。它还具备增强的徒手战斗能力。除了标准萨瑟兰装备外，柯内莉亚的格洛斯特通常使用大型骑枪和突击步枪。骑枪包含一组在四个侧面的扩展叉，可以捕获和解除敌人武器。结合格洛斯特的高机动性和动力，这种可怕的武器可用于直接穿透敌人Knightmare的驾驶舱，杀死驾驶员并防止他通过标准弹射系统逃脱。</p>`,
        combat: `<p>它首次出现在成田战斗，并出现在柯内莉亚参与的每个其他主要战斗中。该机体在黑色叛乱中严重受损，当时安德烈亚斯·达顿在鲁路修Geass的影响下，将他的电磁骑枪投向它，刺穿驾驶舱，重伤柯内莉亚，并摧毁该机体。</p>`
    },
    {
        id: 18,
        name_zh: "钢髅",
        name_en: "Gun-Ru",
        model: "TQ-19",
        faction: "chinese",
        generation: "第4世代",
        type: "量产机",
        pilot: "洪古",
        image: "https://cdn4.winhlb.com/2025/10/27/68ff93cd2e947.webp",
        description: "钢髅是一种与不列颠机体相似但又高度不同的Knightmare Frame。型号为TQ-19，由中华联邦设计和部署，以匹配不列颠Knightmare Frame的有效性和成功。",
        specs: {
            height: "5.67m",
            weight: "13.08t",
            armor: "钨",
            power: "樱石能源块",
            developer: "中华联邦"
        },
        equipment: {
            standard: [
                { name: "陆地滑行推进系统", description: "利用脚跟处的动力轮大幅提升KMF的机动性" },
                { name: "2 × 操纵臂", description: "" }
            ]
        },
        weapons: {
            fixed: [
                { name: "2 × 顶部肩部安装机枪", description: "" },
                { name: "2 × 底部肩部安装加农炮", description: "" }
            ]
        },
        design: `<p>钢髅比不列颠的对应机型更大，身体呈圆顶形，通常涂装为绿色带红色辅助装饰（尽管在第二季中看到全红色版本，这些红色变体单位属于忠诚于高级宦官的士兵），腿部和操纵臂较小，折叠进入身体，使其外观几乎像青蛙。</p><p>钢髅的主要武装包括一对机枪和一对加农炮，安装在单位肩部。由于缺乏适当的肢体，该单位无法进行任何近距离徒手战斗，但通过使用固定远程武器来弥补这一点。与其他Knightmare Frame不同，它没有驾驶舱弹射系统，需要从前方进出。尽管比不列颠的Knightmare弱得多，但钢髅生产成本更低，允许中华联邦在战斗中使用时依赖其数量优势。</p>`,
        combat: `<p>中华联邦在试图接管日本最南端岛屿九州时部署了许多钢髅。最初，甚至枢木朱雀和他的兰斯洛特也被派往他的大量钢髅所压倒，但黑色骑士团领袖Zero驾驶高文突然介入，扭转了对中华联邦的局面。</p><p>一年后在第二季，它仍然是中华联邦的主要Knightmare Frame。再次，它被大量使用，在Zero和黑色骑士团与由黎星刻和高级宦官领导的中国军队之间的战斗中部署了数百台；它们的大量数量证明擅长突破阵型。一些钢髅也部署在鹿儿岛定居点战斗中。</p><p>在皇历第二年，鲁路修的Zero镇魂曲计划之后，在《Code Geass: Lelouch of the Re;surrection》中，电影开始时绑架Zero（朱雀）和娜娜莉的部队中看到一台，并且它们仍被联合国使用。电影结束时，在黑色骑士团登陆Zilkhstan期间看到一些。</p>`
    },
    {
        id: 19,
        name_zh: "红莲可翔式",
        name_en: "Guren Flight-Enabled Version",
        model: "Type-02/F1A",
        faction: "black-knights",
        generation: "第7世代",
        type: "专用机",
        pilot: "红月卡莲",
        image: "https://cdn4.winhlb.com/2025/10/28/68ff992d9f503.webp",
        description: "红莲可翔式是红莲贰式的升级型号。在与黑色骑士团交战中被枢木朱雀的兰斯洛特征服者击败后，从红莲贰式升级而来。它配备了新开发的空中滑翔系统和新的穿甲轰击型辐射波单元，成为首台使用空中滑翔系统的Knightmare。",
        specs: {
            height: "4.51m",
            weight: "7.51t",
            armor: "钨",
            power: "樱石能源块",
            developer: "贾巴尔普尔研究中心",
            derivedFrom: "红莲贰式",
            development: "红莲圣天八极式"
        },
        equipment: {
            standard: [
                { name: "陆地滑行推进系统", description: "利用脚跟处的动力轮大幅提升KMF的机动性" },
                { name: "驾驶舱弹射系统", description: "利用火箭助推器使驾驶舱与KMF分离" },
                { name: "空中滑翔系统", description: "提供飞行能力" },
                { name: "辐射波护盾", description: "" }
            ]
        },
        weapons: {
            fixed: [
                { name: "1 × 右臂内置穿甲轰击型辐射波单元", description: "" },
                { name: "1 × 左胸安装飞燕爪牙", description: "" },
                { name: "1 × 左臂安装定制手枪", description: "" },
                { name: "1 × 12管导弹发射器", description: "安装在空中滑翔系统中" }
            ],
            handheld: [
                { name: "1 × 叉刀", description: "" }
            ]
        },
        design: `<p>红莲可翔式最明显的变化是增加了空中滑翔系统，使其能够飞行，以及头部的美学变化，如两侧的天线和面部的线条标记。它还获得了一个新的"穿甲轰击型"辐射波臂，与Knightmare的配色方案相匹配，尽管前臂仍然主要是银色。辐射波臂现在还配备了4根可以围绕手部展开的杆，用于放大辐射波爆炸以实现广域攻击。新的辐射波臂可以在保持近程爆炸的同时，进行远程或广域辐射波射击，威力远超以往。空中滑翔翼附加装置带有内置导弹发射器包，不仅装载标准导弹，还装载箔条烟雾弹和便携版的盖芬干扰器，称为盖芬网。兰斯洛特征服者拥有在暴露于干扰器时防止完全停机的对策，但即使如此，它仍然会被能量激增所减慢。</p>`,
        combat: `<p>尽管改装主要包括新的头部和手臂，但此次升级使红莲与圆桌骑士的个人Knightmare相媲美，卡莲重新成为黑色骑士团的王牌驾驶员。然而不久之后，红莲与其"兄弟"中国Knightmare Frame XT-404神虎对抗，并因缺乏维护而在关键时刻失去动力而被击败。卡莲和红莲被交给修奈泽尔·el·不列颠王子，他将红莲交给在第七骑士枢木朱雀手下工作的卡梅洛特工程团。该团随后对俘获的敌机进行了大规模检修，创造了红莲圣天八极式。</p>`
    },
    {
        id: 20,
        name_zh: "红莲圣天八极式",
        name_en: "Guren S.E.I.T.E.N. Eight Elements",
        model: "Type-02/F1Z",
        faction: "black-knights",
        generation: "第9世代",
        type: "专用机",
        pilot: "红月卡莲",
        image: "https://cdn4.winhlb.com/2025/10/28/68ff9c1217e17.webp",
        description: "红莲圣天八极式是从红莲可翔式升级而来，在卡莲和红莲在与中华联邦的战斗中被俘并交给神圣不列颠帝国后，由卡梅洛特改造。",
        specs: {
            height: "4.51m",
            weight: "7.51t",
            armor: "钨",
            power: "樱石能源块",
            developer: "卡梅洛特",
            derivedFrom: "红莲可翔式、Vercingetorix、Amanecer",
            development: "红莲特制型、摩利支天",
            variants: "红莲LDM"
        },
        equipment: {
            standard: [
                { name: "飞燕助推器", description: "3个，用于控制飞行" },
                { name: "陆地滑行推进系统", description: "利用脚跟处的动力轮大幅提升KMF的机动性" },
                { name: "驾驶舱弹射系统", description: "利用火箭助推器使驾驶舱与KMF分离" },
                { name: "能量翼系统", description: "提供高速飞行能力，能量羽毛可作为刀刃、盾牌和投射物" },
                { name: "辐射波护盾", description: "" }
            ]
        },
        weapons: {
            fixed: [
                { name: "右臂内置穿甲轰击型辐射波单元", description: "" },
                { name: "肩部安装飞燕爪牙", description: "2个" },
                { name: "背部安装6管导弹发射器", description: "2个" }
            ],
            handheld: [
                { name: "MVS叉刀", description: "升级后具有MVS能力，长度加倍，威力强大" }
            ]
        },
        design: `<p>经过卡梅洛特的重新配置，红莲被重建为世界上首台第九世代Knightmare Frame。它成为首台采用能量翼系统的KMF，该系统后来被纳入兰斯洛特阿尔比昂，但每个翅膀有四个能量"羽毛"而非三个。羽毛能够作为刀刃、盾牌和投射物使用。该系统使红莲能够以令人目眩的速度移动，在飞行中几乎只留下紫色残影。其辐射波臂现在在手指和前臂上有金色点缀，并从先前形式大幅升级。它可以像飞燕爪牙一样发射，带有飞燕助推器用于控制飞行。手臂在脱离主体后仍能继续运作。虽然辐射波臂仍能像可翔式一样进行远程射击，但圣天八极式现在能够发射盘状能量投射物。它还新装备了两个附着在肩部的飞燕爪牙。</p><p>红莲的所有原始功能都得到保留和升级。常规短程辐射爆炸现在甚至能阻挡Hadron爆炸，而手部无需发射器辅助就能粉碎能量护盾。红莲的叉刀也得到升级，加装了MVS能力并长度加倍。其MVS的威力比大多数MVS武器更强大，如其紫色所示，与典型的红色相反。该刀用于切断兰斯洛特征服者的MVS剑，甚至粉碎珀西瓦尔的粒子枪，后者是使用光辉盾牌技术建造的。</p><p>膝盖和脚踝增加了额外装甲，天线被延长和放大，使其外观像巨耳。躯干被重新制作，橙色部分进一步向外延伸，前面有一对绿色宝石突出，使该部分有些类似鸟头。其名称来源于其操作系统，Superlative Extruder Interlocked Technology Exclusive Nexus (S.E.I.T.E.N.) Eight Elements。</p><p>据洛伊德所说，有能力的驾驶员（如卡莲）即使在其总输出的60%下也能摧毁第八世代及以下的Knightmare。用这位科学家自己的话来说："有能力的驾驶员，即使只有60%输出，那东西也能将其他Knightmare切成碎片！"</p>`,
        combat: `<p>红莲圣天八极式首次出现在卡莲在第二次东京战斗中被从监狱释放后，由救援者展示给她。尽管据称因洛伊德的改动而难以驾驶，卡莲成功驾驶了升级后的红莲，并迅速扭转了战局，摧毁了无数不列颠Knightmare，单枪匹马击败了女武神中队、第十骑士卢西亚诺·布拉德利在他的珀西瓦尔中，并严重损坏了兰斯洛特征服者，以至于朱雀的"Live"命令激活，迫使他使用F.L.E.I.J.A.。然而，卡莲和红莲逃脱了爆炸，并与黑色骑士团的其余成员撤退。</p><p>红莲的最后部署是在富士山战斗期间。战斗中，卡莲用红莲攻击阿瓦隆，试图杀死鲁路修，但被C.C.在兰斯洛特边境阻止。在快速击败C.C.后，卡莲很快挑战了朱雀在他的兰斯洛特阿尔比昂中，两人开始了激烈的决斗。在战斗中，红莲和兰斯洛特都耗尽了大部分系统的能量，包括能量翼，迫使他们在达摩克利斯上战斗。经过更激烈的战斗，两台Knightmare都发出了最后一击，兰斯洛特被完全摧毁，红莲在卡莲失去意识前失去了手臂和头部，从达摩克利斯上坠落。然而，它被基诺用受损的崔斯坦分离者接住。在Zero镇魂曲之后，红莲的结局未显示，但推测它被归还给了拉克夏塔。</p>`
    },
    {
        id: 21,
        name_zh: "红莲贰式",
        name_en: "Guren Mk-II",
        model: "Type-02",
        faction: "black-knights",
        generation: "第7世代",
        type: "试作机",
        pilot: "红月卡莲",
        image: "https://cdn4.winhlb.com/2025/10/28/68ffa87a83b3c.webp",
        description: "红莲贰式是由印度工程师拉克夏塔·恰拉设计的原型Knightmare Frame模型，由日本制造，京都六家建造。它与不列颠的对应机型截然不同，其技术与大多数第七世代Knightmare Frame相当，这是其制造商引以为傲的事实。唯一存在的单位由黑色骑士团拥有，由红月卡莲驾驶。",
        specs: {
            height: "4.51m",
            weight: "7.51t",
            armor: "钨",
            power: "樱石能源块",
            developer: "贾巴尔普尔研究中心",
            derivedFrom: "红莲初式"
        },
        equipment: {
            standard: [
                { name: "驾驶舱弹射系统", description: "利用火箭助推器使驾驶舱与KMF分离" },
                { name: "陆地滑行推进系统", description: "利用脚跟处的动力轮大幅提升KMF的机动性" },
                { name: "背部内置箔条烟雾投放系统", description: "" }
            ]
        },
        weapons: {
            fixed: [
                { name: "右臂内置辐射波单元", description: "" },
                { name: "左胸安装飞燕爪牙", description: "" }
            ],
            handheld: [
                { name: "叉刀", description: "" }
            ]
        },
        design: `<p>红莲贰式从原型红莲初式模型发展而来，其设计和规格与更常见的不列颠平台（Knightmare Frame通常基于此建造）显著不同。首先，它似乎没有容纳任何可见形式的事实球传感器，这是收集战术数据的关键组件，而以前的Knightmare heavily 依赖于此。此外，陆地滑行推进系统（重命名为"高机动降蹄轮式"陆地滑行系统）也明显不同，因为传统的两个马达放置在双脚侧面，而它们是作为腿部本身的一部分建造的，这可以使它们 less likely 被摧毁或失效。与不列颠制造的Knightmare驾驶舱不同，红莲贰式具有非常规风格的驾驶舱，驾驶员座椅形状为摩托车座椅，控件和用户界面直接放置在驾驶员面前，尽管 drastically 不同，它仍然保持紧急驾驶舱弹射系统。当不使用时，红莲贰式置于"待机模式"，头部缩回胸部中心。外观方面，贰式几乎与初式相同，重复使用装甲和身体部件，主色为 vibrant 红色，但其次要颜色为浅橙色部分。</p><p>红莲贰式的主要武器是其银色右手。这只手在 otherwise 红色涂装的机甲中脱颖而出，末端是锋利的爪状手指，并且可以在肘部 base 延伸进行 surprise 攻击。存储在这只大手掌中的是辐射波动，一种强大的微波辐射发射器。通过抓住敌人 Knightmare 并激活发射器，红莲贰式可以炸毁 Frame 的电子设备并 heavily 扭曲 frame 本身，不仅使不幸的机器完全无法 salvage，而且通常禁用驾驶员的弹射系统，通常确保驾驶员将与其 craft 一同 perish。虽然未如此设计，但辐射波动也可以使用辐射波进行防御和攻击。它已被显示阻挡敌人 Knightmare 的电磁骑枪，偏转 Knightmare 突击步枪的子弹，阻止 incoming 飞燕爪牙，甚至可以偏转兰斯洛特的 VARIS 步枪的炮弹。然而，在东京战斗期间，手臂被摧毁，但在第二季开始时被更纤细的三指版本取代。后来的月下模型及其迭代基于红莲的技术，使用该 frame 作为开发基础。</p><p>除了其辐射波动，红莲贰式拥有一把小叉刀，左臂上的机关炮，以及安装在左侧胸部的单个飞燕爪牙。它还配备了箔条烟雾投放系统，位于其背部驾驶舱。红莲贰式的速度和纯粹强度可以轻松匹配兰斯洛特（也是高度先进的第七世代 Knightmare），两台机器在战斗中多次交战。然而，其缺乏远程武器使其更接近战模型，适合在战斗中的防御位置，尽管卡莲的驾驶技能可以使其成为强大的进攻武器。</p>`,
        combat: `<p>红莲贰式首次出现在系列第10集"红莲舞曲"中，由京都组交付给黑色骑士团，他们迅速将其投入 active 使用，王牌驾驶员红月卡莲被任命为其主要驾驶员。它在成田战斗中扮演关键角色，首次使用其辐射波动 disrupt 山脉的水位，导致大规模泥石流，消灭了周围大多数不列颠部队。在单枪匹马击败杰里米亚·戈特瓦尔德在他的萨瑟兰中，以及大部分纯血派，通过使用其辐射波动后，卡莲继续用红莲与柯内莉亚在她的格洛斯特中决斗，并即将交付 final 打击，但被驾驶兰斯洛特的朱雀中断。红莲和兰斯洛特首次战斗，尽管红莲 gaining 上风，摧毁了兰斯洛特的一把 MVS 剑并成功阻挡其所有攻击，但当红莲在尝试用右手阻挡兰斯洛特发射的 VARIS 子弹时坠落悬崖，战斗停止。阻挡它最终损坏了辐射波动，这 prompt Zero 让黑色骑士团撤退。</p><p>红莲贰式随后参与黑色骑士团的每一次行动，成为他们的"王牌"。红莲和兰斯洛特在整个系列中多次对抗，每次战斗都以平局告终，直到第一次东京战斗，兰斯洛特升级了浮空系统，并能够击败红莲，尽管失去了一只手臂，通过用 VARIS 步枪摧毁其辐射波动。然而，朱雀从 finishing 卡莲和红莲 off 被鲁路修到达高文中断。在部分修复后，红莲被卡莲带到神根岛 pursuit 朱雀和鲁路修。</p><p>在第二季，揭示卡莲在失败的黑色叛乱和神根岛对抗后成功逃脱红莲并避免捕获。两者在一年后参与黑色骑士团酒店事件，红莲已被修复，其辐射波动被三爪版本取代。在太平洋伏击行动期间，红莲被较新的兰斯洛特征服者的 Hadron 冲击炮轻松击败并 sent hurtling  towards 海洋，辐射波动臂无法完全阻挡。然而，卡莲和红莲被拉克夏塔新创建的空中滑翔系统拯救，该系统与新型辐射波动一起，将损坏的机器升级为红莲可翔式。</p><p>然而，新的可翔式在其 debut 后将看到短暂的历史。在小沛战斗期间，它与"兄弟"神虎交战。由于神虎是更先进的单位，以及红莲 power 不足，该单位被捕获并交给卡梅洛特研究组。该单位随后被重新配置为红莲圣天八极式，世界上首台第九世代 Knightmare Frame。</p>`
    },
    {
        id: 22,
        name_zh: "骑士警察",
        name_en: "Knightpolice",
        model: "LE-E106",
        faction: "britannia",
        generation: "第4世代",
        type: "专用机",
        pilot: "",
        image: "https://cdn4.winhlb.com/2025/10/28/68ffad6eb0340.webp",
        description: "骑士警察是由退役格拉斯哥改造而成的Knightmare Frame。它们由不列颠警察部队的精英准军事单位操作，作为常规和特殊警察单位的后备支持。",
        specs: {
            height: "4.37m",
            weight: "8.09t",
            armor: "钨",
            power: "樱石能源块",
            developer: "神圣不列颠帝国",
            derivedFrom: "格拉斯哥"
        },
        equipment: {
            standard: [
                { name: "驾驶舱弹射系统", description: "利用火箭助推器使驾驶舱与KMF分离" },
                { name: "事实球传感器", description: "" },
                { name: "陆地滑行推进系统", description: "利用脚跟处的动力轮大幅提升KMF的机动性" }
            ]
        },
        weapons: {
            fixed: [
                { name: "2 × 胸部安装飞燕爪牙", description: "" },
                { name: "2 × 机枪手枪", description: "" },
                { name: "2 × 反Knightmare战斗刀", description: "" }
            ],
            optional: [
                { name: "2 × 眩晕Tonfas", description: "" },
                { name: "1 × 防暴盾", description: "" }
            ]
        },
        design: `<p>在神圣不列颠帝国开发了更优秀的Knightmare Frame萨瑟兰后，它比格拉斯哥更受青睐。因此，神圣不列颠帝国使用剩余的格拉斯哥并将它们改造成骑士警察。改进包括以白色为基础的涂装，在胸部、肩部和驾驶舱顶部安装红色旋转灯，以及改变手臂和下身的装甲形状。</p><p>作为改造的格拉斯哥，它仍然保留了常规格拉斯哥的所有特征。然而，由于是专门为不列颠警察部队制造的，它配备了一对位于新建枪套内的机枪手枪，而不是标准KMF的突击步枪，以及特制的反Knightmare战斗刀。此外，骑士警察框架在人群控制情况下也使用防暴盾，其中可能涉及枪支或流氓Knightmares。</p>`,
        combat: ""
    },
    {
        id: 23,
        name_zh: "兰斯洛特",
        name_en: "Lancelot",
        model: "Z-01",
        faction: "britannia",
        generation: "第7世代",
        type: "试作机",
        pilot: "枢木朱雀、鲁路修·vi·不列颠",
        image: "https://cdn4.winhlb.com/2025/10/28/6900968a08da5.webp",
        description: "兰斯洛特是以圆桌骑士命名的实验性Knightmare Frame，由Lloyd Asplund和ASEEC开发。它是首台第七世代Knightmare Frame，性能优越，由于大量樱石分散在框架和尤格德拉希尔驱动中。由于仍在开发中，缺少弹射座椅。",
        specs: {
            height: "4.49m",
            weight: "6.89t",
            armor: "钨",
            power: "樱石能源块",
            developer: "ASEEC",
            development: "兰斯洛特征服者、兰斯洛特俱乐部、兰斯洛特圣杯、兰斯洛特试验、文森特",
            variants: "兰斯洛特空中骑兵、兰斯洛特边境、兰斯洛特（Zero规格）"
        },
        equipment: {
            standard: [
                { name: "光辉盾牌系统", description: "产生能量屏障防御攻击" },
                { name: "事实球传感器", description: "" },
                { name: "陆地滑行推进系统", description: "利用脚跟处的动力轮大幅提升KMF的机动性" }
            ],
            optional: [
                { name: "沙地板", description: "提供在沙漠地形上的改进牵引力" },
                { name: "浮空系统", description: "提供飞行能力" }
            ]
        },
        weapons: {
            fixed: [
                { name: "4 × 飞燕爪牙", description: "配备飞燕助推器，可提高速度并改变方向" }
            ],
            handheld: [
                { name: "2 × 微波振动剑", description: "高频振荡，可切割几乎所有物体" },
                { name: "1 × VARIS步枪", description: "可变弹药排斥冲击步枪，能适应任何情况" }
            ]
        },
        design: `<p>作为高性能单位，兰斯洛特具有许多实验性和创新设备，包括两个可收缩的事实球（安装在胸部）、两个前臂安装的光束盾牌（光辉盾牌）和四个飞燕爪牙（两个在手腕，两个在髋部）。这些飞燕爪牙配备实验性推进器（飞燕助推器），可提高速度并允许中途改变方向。它还配备一对微波振动剑，高频振荡以切割几乎所有物体。并装备VARIS粒子步枪（可变弹药排斥冲击步枪），能适应任何情况调整弹丸排斥输出。</p>`,
        combat: `<p>兰斯洛特首次出现在新宿贫民区的冲突中。朱雀被Lloyd选为驾驶员，成为兰斯洛特的"devicer"（测试驾驶员）。随后在多次战斗中升级，如在橙色冲突中展示MVS剑，在日本解放战线酒店事件中获得VARIS步枪。在福冈基地战斗中，它成为首台使用浮空系统背包的Knightmare，型号变为Z-01/A兰斯洛特空中骑兵。在欧洲联盟战役中，朱雀继续使用空中骑兵版本，配备定制盾牌以纪念尤菲米娅。在第二季中，朱雀获得升级版兰斯洛特征服者，配备Hadron冲击炮等新系统。后来在富士山战斗中，C.C.获得粉色版兰斯洛特边境，但被卡莲摧毁。</p>`
    },
    {
        id: 24,
        name_zh: "兰斯洛特 阿尔比昂",
        name_en: "Lancelot Albion",
        model: "Z-01Z",
        faction: "britannia",
        generation: "第9世代",
        type: "专用机",
        pilot: "枢木朱雀",
        image: "https://cdn4.winhlb.com/2025/10/28/690099cc6ca4d.webp",
        description: "兰斯洛特阿尔比昂是朱雀·库鲁吉在TV动画系列《Code Geass：反叛的鲁路修R2》中使用的Knightmare Frame。",
        specs: {
            height: "5.15m",
            weight: "9.12t",
            armor: "钨",
            power: "樱石能源块",
            developer: "卡梅洛特",
            derivedFrom: "兰斯洛特征服者",
            development: "兰斯洛特 siN"
        },
        equipment: {
            standard: [
                { name: "光辉盾牌系统", description: "产生能量屏障防御攻击" },
                { name: "事实球传感器", description: "多信息收集系统，提供集成信息给驾驶员" },
                { name: "陆地滑行推进系统", description: "利用脚跟处的动力轮大幅提升KMF的机动性" },
                { name: "能量翼系统", description: "通过振荡6个光束翼实现超高速飞行，可作为盾牌和攻击武器" }
            ]
        },
        weapons: {
            fixed: [
                { name: "4 × 飞燕爪牙", description: "特殊碳化钨钢钉连接碳线，由火箭马达发射，用于攻击、攀爬和牵引" }
            ],
            handheld: [
                { name: "2 × 超级V.A.R.I.S.", description: "双管可变弹药排斥冲击步枪，具有普通、Hadron和全爆发三种模式" },
                { name: "2 × 微波振动剑", description: "使用高频振动的电子剪切武器，可瞬间切割萨瑟兰级机体装甲" }
            ]
        },
        design: `<p>由卡梅洛特开发，这台新构建的机体作为实验性Knightmare兰斯洛特的第九世代版本，继承了许多前代元素。它具有与红莲圣天八极式相媲美的机动性和火力。除了红莲外，阿尔比昂是该系列唯一的其他第九世代KMF。它是鲁路修领导的不列颠最强KMF。</p><p>装备包括：陆地滑行系统（用于高速移动和 pivot 转弯）、光辉盾牌发生器（通过库仑场超压缩创建空间，形成能量装甲）、能量翼（应用光辉盾牌和浮空理论，通过振荡6个光束翼实现超高速飞行，可作为盾牌和释放匕首状粒子攻击）、驾驶舱（常规后倾式，适合长期作战）、事实球（多信息收集系统，包括主动/被动传感器和声学拾取）。</p>`,
        combat: `<p>兰斯洛特阿尔比昂在针对鲁路修皇帝的反叛行动中首次亮相，其优越能力使朱雀迅速击败对手，除了基诺·温伯格。随后参与鲁路修绑架U.F.N.成员的行动，提供掩护。在富士山上空的最终战斗中，朱雀与藤堂镜志朗的斩月交战，斩月不敌被毁。在阿瓦隆沉没后，朱雀、鲁路修和小队试图登上达摩克利斯，使用F.L.E.I.J.A.消除器与神虎协作解除一枚F.L.E.I.J.A.弹头。小队突破空中堡垒的光辉盾牌后，内部遭遇基诺的重建崔斯坦分离者伏击。朱雀与基诺决斗获胜，但达摩克利斯护盾受损，允许卡莲的红莲圣天八极式介入。双方反复冲突，红莲的辐射波臂弹药耗尽，阿尔比昂的光辉盾牌发生器能量耗尽，最终陷入僵局。兰斯洛特阿尔比昂胸部受重创，在红莲失去手臂和头部坠落时，阿尔比昂最终在爆炸中摧毁。</p>`
    },
    {
        id: 25,
        name_zh: "兰斯洛特 征服者",
        name_en: "Lancelot Conquista",
        model: "Z-01/DF",
        faction: "britannia",
        generation: "第7世代",
        type: "专用机",
        pilot: "枢木朱雀",
        image: "https://cdn4.winhlb.com/2025/10/28/6900dcd8b8011.webp",
        description: "在第二季中，兰斯洛特的更新版本称为兰斯洛特征服者，被授予第七骑士枢木朱雀。它因附加在浮空系统上的蓝色加农炮 mount 而得名'Conquista Unit'。",
        specs: {
            height: "5.06m",
            weight: "8.95t",
            armor: "钨",
            power: "樱石能源块",
            developer: "卡梅洛特",
            derivedFrom: "兰斯洛特"
        },
        equipment: {
            standard: [
                { name: "光辉盾牌系统", description: "产生能量屏障防御攻击" },
                { name: "驾驶舱弹射系统", description: "利用火箭助推器使驾驶舱与KMF分离" },
                { name: "事实球传感器", description: "多信息收集系统，提供集成信息给驾驶员" },
                { name: "集成浮空系统", description: "提供飞行能力" }
            ]
        },
        weapons: {
            fixed: [
                { name: "4 × 飞燕爪牙", description: "" },
                { name: "1 × Hadron冲击炮", description: "" }
            ],
            handheld: [
                { name: "2 × 微波振动剑", description: "高频振荡，可切割几乎所有物体" },
                { name: "1 × VARIS步枪", description: "可变弹药排斥冲击步枪，能适应任何情况" },
                { name: "1 × 6管导弹发射盾", description: "" }
            ],
            optional: [
                { name: "1 × F.L.E.I.J.A.发射器", description: "" }
            ]
        },
        design: `<p>浮空系统背包现在是标准装备。征服者获得Hadron冲击炮，安装在浮空系统顶部，通过将其VARIS步枪停靠在附加在浮空系统上的较大加农炮 mount 下方来发射。其独特的Core Luminous已被调整和精炼，增加了战斗中的功率，并配备了对抗Knightmare禁用Gefjun干扰器的部分防御措施。征服者在腿部和胸部有三个额外的光辉盾牌。腿部盾牌增加了踢击的效果。胸部还有四个次要发射器，可以形成"Core Luminous Cone"，一个圆锥形屏障，延伸至兰斯洛特前方几英尺，与普通屏蔽的平坦性质相反。</p>`,
        combat: `<p>在第二季中，兰斯洛特征服者被授予第七骑士枢木朱雀。它在第二次东京定居点战斗中严重受损，在与红莲圣天八极式遭遇后。Hadron冲击炮被切成两半，双腿和左臂被切断，胸部装甲也受损。</p>`
    },
    {
        id: 26,
        name_zh: "兰斯洛特 边境",
        name_en: "Lancelot Frontier",
        model: "Z-01/A",
        faction: "britannia",
        generation: "第7世代",
        type: "专用机",
        pilot: "C.C.",
        image: "https://cdn4.winhlb.com/2025/10/28/6900dcd7aae1f.webp",
        description: "兰斯洛特边境是一种Knightmare Frame，特别是兰斯洛特的变体，为C.C.在鲁路修成为不列颠皇帝时使用。它被涂成粉色以区别于原版。",
        specs: {
            height: "4.49m",
            weight: "6.89t",
            armor: "钨",
            power: "樱石能源块",
            developer: "卡梅洛特",
            derivedFrom: "兰斯洛特"
        },
        equipment: {
            standard: [
                { name: "驾驶舱弹射系统", description: "利用火箭助推器使驾驶舱与KMF分离" },
                { name: "光辉盾牌系统", description: "产生能量屏障防御攻击" },
                { name: "事实球传感器", description: "" },
                { name: "陆地滑行推进系统", description: "利用脚跟处的动力轮大幅提升KMF的机动性" }
            ],
            optional: [
                { name: "浮空系统", description: "提供飞行能力" }
            ]
        },
        weapons: {
            fixed: [
                { name: "4 × 飞燕爪牙", description: "" }
            ],
            handheld: [
                { name: "2 × 微波振动剑", description: "高频振荡，可切割几乎所有物体" },
                { name: "1 × VARIS步枪", description: "可变弹药排斥冲击步枪，能适应任何情况" },
                { name: "1 × 6管导弹发射盾", description: "" }
            ]
        },
        design: `<p>虽然原版兰斯洛特是高性能机器，但兰斯洛特边境略弱于原版，因为它是由备用和回收部件制成的。然而，与原版兰斯洛特不同，这一台拥有驾驶舱弹射系统。尽管性能较弱，它拥有与原版兰斯洛特相同的所有武器，但也使用了导弹发射盾，类似于珀西瓦尔。</p>`,
        combat: `<p>兰斯洛特阿尔比昂在针对鲁路修皇帝的反叛行动中首次亮相，其优越能力使朱雀迅速击败对手，除了基诺·温伯格。随后参与鲁路修绑架U.F.N.成员的行动，提供掩护。在富士山上空的最终战斗中，朱雀与藤堂镜志朗的斩月交战，斩月不敌被毁。在阿瓦隆沉没后，朱雀、鲁路修和小队试图登上达摩克利斯，使用F.L.E.I.J.A.消除器与神虎协作解除一枚F.L.E.I.J.A.弹头。小队突破空中堡垒的光辉盾牌后，内部遭遇基诺的重建崔斯坦分离者伏击。朱雀与基诺决斗获胜，但达摩克利斯护盾受损，允许卡莲的红莲圣天八极式介入。双方反复冲突，红莲的辐射波臂弹药耗尽，阿尔比昂的光辉盾牌发生器能量耗尽，最终陷入僵局。兰斯洛特阿尔比昂胸部受重创，在红莲失去手臂和头部坠落时，阿尔比昂最终在爆炸中摧毁。</p>`
    },
    {
        id: 27,
        name_zh: "莫德雷德",
        name_en: "Mordred",
        model: "RZA-6DG",
        faction: "britannia",
        generation: "第7世代",
        type: "专用机",
        pilot: "安尼亚·阿尔斯特雷姆、玛丽安娜·vi·不列颠",
        image: "https://cdn4.winhlb.com/2025/10/28/6900d70cd5e49.webp",
        description: "莫德雷德是以圆桌骑士命名的重炮击型Knightmare Frame，由第六骑士安尼亚·阿尔斯特雷姆驾驶。",
        specs: {
            height: "4.71m",
            weight: "10.23t",
            armor: "钨",
            power: "樱石能源块",
            developer: "卡梅洛特",
            derivedFrom: "Zetland、Zetland Schild",
            development: "Mordred Buildup"
        },
        equipment: {
            standard: [
                { name: "集成浮空系统", description: "提供飞行能力" },
                { name: "光辉盾牌系统", description: "产生能量屏障防御攻击" },
                { name: "驾驶舱弹射系统", description: "利用火箭助推器使驾驶舱与KMF分离" }
            ]
        },
        weapons: {
            fixed: [
                { name: "4 × 肩部安装Hadron加农炮", description: "可展开合并为四管加农炮，称为Stark Hadron Cannon" },
                { name: "116 × 微型近程导弹发射器", description: "从手腕、胸部、髋部和腿部发射" }
            ]
        },
        design: `<p>莫德雷德拥有集成浮空系统，使其能够飞行。它牺牲速度换取厚装甲，使其非常耐用；能够承受月下的花天狂骨刀直接命中而无划痕（见于太平洋伏击行动），而任何其他Knightmare都会被切成两半。但浮空系统则不然，可以轻松被切断（见于激情之力）。同时，它成为除兰斯洛特外首批接收光辉盾牌系统的Knightmare之一，进一步增加了防御力。与原始兰斯洛特系统仅覆盖手臂相比，莫德雷德的光辉盾牌可以包裹整个单位。</p><p>它拥有两套Hadron加农炮安装在每个肩部，可展开合并为四管加农炮，称为Stark Hadron Cannon，将它们的威力集中到单一爆炸中，能够一击 obliterate 空中巡洋舰。该武器通常用于大型目标、强大对手或直线火力内的敌人。它也可用于诱捕敌人，使加农炮能够对那个敌人施加压力（见于最终战斗东京II）。为了同时攻击多个目标（如果它们小和/或分散在战场不同部分）或快速移动的目标，莫德雷德还拥有微型近程导弹，从手腕、胸部、髋部和腿部发射，移动时留下黑色和红色轨迹。尽管缺乏近程武器，莫德雷德的原始力量使其能够轻松粉碎其他较小Knightmare。</p>`,
        combat: `<p>它参与了多次战斗，包括第二次袭击东京定居点和富士山战斗。莫德雷德在最后一集（Re;）中被杰里米亚·戈特瓦尔德的萨瑟兰齐格的残骸严重损坏，双臂和头部被炸掉；驾驶舱被破坏并暴露，但损坏并不太严重，因为集成浮空系统仍然功能正常。</p>`
    },
    {
        id: 28,
        name_zh: "MR-1",
        name_en: "MR-1",
        model: "MR-1",
        faction: "black-knights",
        generation: "第4世代",
        type: "量产机",
        pilot: "扇要、基诺·温伯格",
        images: [
            {
                url: "https://cdn4.winhlb.com/2025/10/28/6900d70d5cd6f.webp",
                description: "黑色骑士团配色"
            },
            {
                url: "https://cdn4.winhlb.com/2025/10/28/6900d70de5f0c.webp",
                description: "阿什福德学园配色"
            }
        ],
        image: "https://cdn4.winhlb.com/2025/10/28/6900d70de5f0c.webp",
        description: "MR-1是一种基本的非战斗Knightmare，可以折叠成更紧凑的形式。",
        specs: {
            height: "4.35m",
            weight: "7.20t",
            armor: "钨",
            power: "樱石能源块",
            developer: "神圣不列颠帝国",
            development: "萨默塞特"
        },
        equipment: {
            standard: [
                { name: "陆地滑行推进系统", description: "利用脚跟处的动力轮大幅提升KMF的机动性" },
                { name: "驾驶舱弹射系统", description: "利用火箭助推器使驾驶舱与KMF分离" }
            ]
        },
        weapons: {
            fixed: [
                { name: "2 × 胸部安装飞燕爪牙", description: "" }
            ]
        },
        design: `<p>MR-1是一种为民用设计的Knightmare Frame，其大部分装甲已被剥离。作为非战斗Knightmare，MR-1除了两个胸部安装的飞燕爪牙外没有任何进攻性武器。它唯一其他特征是陆地滑行推进系统和驾驶舱弹射系统。其性能相当于第四世代模型。</p>`,
        combat: `<p>在第一季中，黑色骑士团使用一台黑白配色的MR-1救援枢木朱雀。它由扇要驾驶，但被库埃鲁·索雷西摧毁。在第二季中，阿什福德学院使用紫黄配色的MR-1代替盖尼米德。在纪念第七骑士枢木朱雀的节日期间，第二次尝试制作世界上最大的披萨；原本计划由朱雀驾驶的MR-1被基诺·温伯格征用。当鲁路修启动灭火器隐藏C.C.的存在时，披萨再次被毁。</p>`
    },
    {
        id: 29,
        name_zh: "装甲黄蜂",
        name_en: "Panzer Hummel",
        model: "Mk3-E2E8",
        faction: "eu",
        generation: "第4世代",
        type: "量产机",
        pilot: "欧洲士兵",
        image: "https://cdn4.winhlb.com/2025/10/28/6900d70e56221.webp",
        description: "装甲黄蜂是欧洲联盟成员国使用的量产型Knightmare Frame，首次在第二季引入。它是为欧盟军队创建的首台KMF，具有高火力但机动性较慢，在与其它KMF战斗中处于劣势。",
        specs: {
            height: "",
            weight: "",
            armor: "钨",
            power: "樱石能源块",
            developer: "欧洲联盟"
        },
        equipment: {
            standard: [
                { name: "陆地滑行推进系统", description: "利用脚跟处的动力轮大幅提升KMF的机动性" },
                { name: "驾驶舱弹射系统", description: "利用火箭助推器使驾驶舱与KMF分离" }
            ]
        },
        weapons: {
            fixed: [
                { name: "2 × 臂装自动加农炮", description: "" },
                { name: "2 × 髋装机枪", description: "" },
                { name: "2 × 胸部安装3管导弹荚舱", description: "" },
                { name: "2 × 髋部安装飞燕爪牙", description: "" }
            ]
        },
        design: `<p>装甲黄蜂拥有两门安装在手臂位置的自动加农炮、两门附着在髋部的机枪、六个分为两组的导弹发射器和两个安装在髋部的飞燕爪牙。它们比萨瑟兰更具机动性，但由于缺乏适当的肢体，很可能无法进行徒手战斗。</p><p>虽然大多数不列颠的Knightmare Frame在近程和远程战斗之间基本平衡，但欧洲联盟设计了一种仅专注于远程战斗的Knightmare Frame。即便如此，它们具有 exceptional 防御能力，在欧盟和不列颠之间的战争中守住了El Alamein防线。</p><p>头部部分：两个相同形状的盘状单位安装在看起来像眼睛的机身顶部。这是欧盟无法开发像事实球那样具有先进信息收集和分析能力的系统的权宜之计。由于每个眼睛是独立的，即使只剩一个也能保持操作有效性。尽管它们的临时采用意味着存在一些盲点可以利用。</p><p>身体部分：背部有驾驶舱 compartment 的结构看起来与不列颠军方对应物相同，特别是带有驼峰，但不知道是否有弹射系统。它有两个三单元弹出式导弹 built into 每侧。看到Knightmare Frame装备内置导弹是罕见的。</p><p>腿部部分/飞燕爪牙：这台机器的腿部不适合行走，在战斗期间装甲黄蜂将使用隐藏在其腿部鞋底下的陆地滑行系统。尽管它在大腿上装备了机枪和飞燕爪牙，但它仍然对常规KMF对手处于劣势，因此必须在敌人无法利用其缺乏机动性的地方战斗。</p><p>加农炮：它拥有两门大型加农炮固定 attached 到双臂。这是这台机器的主要武器，适合从中到长程攻击，甚至能够进行间接射击。尽管由于包括加农炮在内的武装而具有 great 火力，但由于未装备五指操纵器，其多功能性和近战能力较低，这是其无法与不列颠Knightmare Frame竞争的原因之一。</p>`,
        combat: `<p>该单位首次出现在第二季第三集，一大 division 的装甲黄蜂几乎 decimated 不列颠部队（主要由萨瑟兰和格洛斯特组成）以防止在欧洲大陆的两栖登陆，直到朱雀和他的兰斯洛特出现并摧毁了它们 all。当联合国在联合国一号决议中成立时，几个欧盟国家加入了该组织，将其装甲黄蜂添加到黑色骑士团的反不列颠部队中。在 initial 袭击鹿儿岛定居点期间，在黎星刻的部队中也看到一台。</p><p>在《Code Geass: Lelouch of the Re;surrection》中，一些在电影开始时绑架Zero（朱雀）和娜娜莉的部队中看到。</p>`
    },
    {
        id: 30,
        name_zh: "珀西瓦尔",
        name_en: "Percival",
        model: "RZA-10JS",
        faction: "britannia",
        generation: "第7世代",
        type: "专用机",
        pilot: "卢西亚诺·布拉德利",
        image: "https://cdn4.winhlb.com/2025/10/28/6900d70e11bea.webp",
        description: "珀西瓦尔是以圆桌骑士命名的Knightmare Frame，由第十骑士卢西亚诺·布拉德利驾驶。它参与了鹿儿岛定居点战斗和第二次袭击东京定居点，但被红莲圣天八极式摧毁。",
        specs: {
            height: "5.13m",
            weight: "9.07t",
            armor: "钨",
            power: "樱石能源块",
            developer: "卡梅洛特"
        },
        equipment: {
            standard: [
                { name: "驾驶舱弹射系统", description: "利用火箭助推器使驾驶舱与KMF分离" },
                { name: "陆地滑行推进系统", description: "利用脚跟处的动力轮大幅提升KMF的机动性" },
                { name: "集成浮空系统", description: "提供飞行能力" },
                { name: "事实球传感器", description: "" },
                { name: "光辉盾牌系统", description: "产生能量屏障防御攻击" }
            ]
        },
        weapons: {
            fixed: [
                { name: "右臂安装四爪/MVS光辉钻枪", description: "爪子可重新配置并旋转，生成光辉盾牌场并将手臂转变为MVS粒子钻枪" },
                { name: "3 × 飞燕爪牙（2×肩部安装、1×头部安装）", description: "" },
                { name: "2 × 髋部安装Hadron冲击炮", description: "" }
            ],
            handheld: [
                { name: "1 × 左手持6管导弹发射盾", description: "" }
            ]
        },
        design: `<p>从兰斯洛特征服者的"Core Luminous Cone"、萨瑟兰的骑枪和高文的Hadron加农炮中汲取灵感，这台Knightmare Frame基于那些武装建造了类似的武器。其装甲异常笨重，具有从手腕延伸的大型圆锥、髋部和脚部的尖刺腿甲，以及从肩部和陆地滑行系统伸出的尖刺。它还有一个集成浮空系统用于飞行能力。珀西瓦尔的主要武器是右腕上的一个大爪。爪子可以重新配置并旋转，生成一个光辉盾牌场并将手臂转变为MVS粒子钻枪。它还可以使用头部和肩部的飞燕爪牙进行近程战斗。对于远程攻击，珀西瓦尔的尖刺髋甲可以打开，露出里面的Hadron冲击炮，以及其盾牌中的导弹发射器。</p>`,
        combat: `<p>珀西瓦尔参与了许多对抗不列颠敌人的战斗。在首次登场时，它轻松攻击并摧毁了一艘U.F.N.飞艇，随后使用Hadron冲击炮摧毁了五台晓单位，并在近距离用钻枪摧毁了第六台。随后在女武神中队的帮助下，抓住一艘严重受损的不列颠浮空战舰并将其扔向大龙胆，但被黎星刻和他的神虎阻止。在听到黑色骑士团攻击东京定居点的消息后，他和女武神中队被派遣到那个战场。在莫德雷德未能摧毁神虎后，女武神中队迅速用他们的飞燕爪牙抓住Zero的个人Knightmare Frame的手臂和腿，而珀西瓦尔试图刺穿其盾牌。随后它被三台由玉城真一郎带领的晓单位攻击，但卢西亚诺迅速用他的导弹盾处理了这三台。当Zero试图反击时，珀西瓦尔刺向其胸部，卢西亚诺知道必须降低盾牌才能让神虎使用其主要武器。当他即将杀死Zero时，红莲圣天八极式迅速飞入，一举摧毁女武神中队，拯救了Zero和他的神虎。经过短暂对峙，红月卡莲和她的红莲迅速解除了布拉德利的珀西瓦尔的武装，并在短暂嘲讽后，杀死了布拉德利并完全焚毁了珀西瓦尔。</p><p>珀西瓦尔使用的相同导弹盾为兰斯洛特边境制造并使用，由C.C.驾驶。</p>`
    },
    {
        id: 31,
        name_zh: "波特曼",
        name_en: "Portman",
        model: "RMI-U13",
        faction: "britannia",
        generation: "第4世代",
        type: "量产机",
        pilot: "尤菲米娅·li·不列颠",
        image: "https://cdn4.winhlb.com/2025/10/29/6901c5955f3fe.webp",
        description: "第四代Knightmare Frame单位RMI-13波特曼是首台生产的两栖Knightmare。波特曼是专门为填补不列颠海军的Knightmare Frame单位角色而创建的。",
        specs: {
            height: "4.69m",
            weight: "5.97t",
            armor: "钨",
            power: "樱石能源块",
            developer: "神圣不列颠帝国",
            development: "波特曼 二型"
        },
        equipment: {
            standard: [
                { name: "驾驶舱弹射系统", description: "利用火箭助推器使驾驶舱与KMF分离" },
                { name: "陆地滑行推进系统", description: "利用脚跟处的动力轮大幅提升KMF的机动性" },
                { name: "手部安装操纵器", description: "" },
                { name: "水上喷气背包", description: "提供水下推进力" }
            ]
        },
        weapons: {
            fixed: [
                { name: "2 × 胸部安装飞燕爪牙", description: "" },
                { name: "4 × 肩部安装鱼雷发射器", description: "每个肩部有双鱼雷发射器，水下模式时肩甲展开暴露发射器以便发射" }
            ]
        },
        design: `<p>主要由不列颠军队使用的两栖KMF。通过位于驾驶舱舱室左右两侧的两个喷水发动机和另外两个内置在腿部的发动机，能够表现出高度的水下机动性，当处于水下巡航模式时。</p><p>其外观设计以流体动力学为首要考虑，能够转变为巡航模式。除了标准的飞燕爪牙，波特曼还有一套安装在肩部的鱼雷发射器和背部的喷水背包。虽然主要在水下操作，但波特曼也可以在陆地上使用其陆地滑行系统，但其速度和战斗技能与格拉斯哥相当。在第二季末，波特曼几乎不再出现，现在可能被波特曼 Type 2取代。在其型号中，RMI代表皇家海军陆战队。</p>`
    },
    {
        id: 32,
        name_zh: "波特曼 二型",
        name_en: "Portman Type 2",
        model: "RMI-U14",
        faction: "britannia",
        generation: "第4世代",
        type: "量产机",
        pilot: "",
        image: "https://cdn4.winhlb.com/2025/10/29/6901c59664962.webp",
        description: "波特曼 Type 2是不列颠在2018年部署的两栖Knightmare Frame。它主要取代了原始波特曼作为主要海军Knightmare，但也能够进行陆地和空中战斗。",
        specs: {
            height: "4.76m",
            weight: "6.06t",
            armor: "钨",
            power: "樱石能源块",
            developer: "神圣不列颠帝国",
            derivedFrom: "波特曼"
        },
        equipment: {
            standard: [
                { name: "驾驶舱弹射系统", description: "利用火箭助推器使驾驶舱与KMF分离" },
                { name: "陆地滑行推进系统", description: "利用脚跟处的动力轮大幅提升KMF的机动性" },
                { name: "水上喷气背包", description: "提供水下推进力" }
            ],
            optional: [
                { name: "可选浮空系统", description: "提供飞行能力" }
            ]
        },
        weapons: {
            fixed: [
                { name: "2 × 胸部安装飞燕爪牙", description: "" },
                { name: "4 × 鱼雷发射器", description: "" },
                { name: "8 × 垂直发射管", description: "" }
            ]
        },
        design: `<p>波特曼 Type 2是在初始波特曼成功后创建的。波特曼设计的先进版本。进行了显著改进。主要在上半身以减少水下阻力，它比其前身相当更快和更专业化，并且通过使用位于后部的八个垂直发射系统更重武装，能够进行地对空攻击，与原始不同。波特曼 Type 2在其设计中增加了一对前臂安装的涡轮机，并用较小的五指手替换了三指爪，现在可以装备便携式Knightmare Frame的武器。它可以配备可选的浮空单元背包，因此改变机体型号为RMI-U14FA波特曼 Type 2空中型。</p>`,
        combat: `<p>波特曼 Type 2首次被看到由枢木朱雀大规模部署，试图捕获黑色骑士团，但失败了，因为Zero启动的计划摧毁了部署的大部分（如果不是全部）波特曼 Type 2以及不列颠的水面舰队。一些波特曼 Type 2后来被看到未能击落神虎，在Zero的身份和Geass被揭示后。在富士山战斗期间，一台波特曼 Type 2是鲁路修小队的一部分，当他渗透达摩克利斯时，但它被堡垒的光辉盾牌屏蔽摧毁，因为它是小组中最后一个试图通过鲁路修使用其绝对防御系统创建的临时洞的。</p>`
    },
    {
        id: 33,
        name_zh: "雷光",
        name_en: "Raikou",
        model: "Type-5R/11G",
        faction: "japan",
        generation: "第4世代",
        type: "试作机",
        pilot: "吉田斗",
        image: "https://cdn4.winhlb.com/2025/10/29/6901c5958b525.webp",
        description: "雷光是通过组合多个Knightmare Frame制造的完全激进型武器，是日本抵抗组织使用的特殊类型武装。雷光最初由日本解放战线开发作为重型攻城武器。",
        specs: {
            height: "5.03m",
            weight: "22.44t",
            armor: "钨",
            power: "樱石能源块",
            developer: "日本解放战线",
            derivedFrom: "格拉斯哥、无赖"
        },
        equipment: {
            standard: [
                { name: "4 × 陆地滑行推进系统", description: "利用脚跟处的动力轮大幅提升KMF的机动性" },
                { name: "4 × 事实球传感器", description: "提供360度视野" }
            ]
        },
        weapons: {
            fixed: [
                { name: "1 × 超级电磁霰弹加农炮", description: "发射一种霰弹：高速炮弹释放两打钢珠轴承，可轻易撕裂Knightmare Frame和大多数其他目标" },
                { name: "1 × 四联自由射击臂炮", description: "" },
                { name: "4 × 胸部安装飞燕爪牙", description: "" }
            ]
        },
        design: `<p>由四台格拉斯哥或无赖变体建造的大型线圈炮。它发射一种霰弹：高速炮弹释放两打钢珠轴承，可轻易撕裂Knightmare Frame和大多数其他目标。四台Knightmare沿着加农炮两侧排列以提供支撑，它们的头部附着在加农炮顶部的圆盘上，提供360度视野。每侧两台Knightmare的驾驶舱连接以创建双座驾驶舱。</p><p>除了主炮外，每台Knightmare开放侧的手臂被替换为可连接加农炮，创建四个次要加农炮，以防主炮未能摧毁目标。</p>`,
        combat: `<p>系列中仅使用了两台，第一台由日本解放战线在日本解放战线酒店事件中使用，第二台由黑色骑士团在袭击东京定居点期间使用。然而，两者都被枢木朱雀摧毁。</p>`
    },
    {
        id: 34,
        name_zh: "神虎",
        name_en: "Shen Hu",
        model: "XT-404",
        faction: "chinese",
        generation: "第7世代",
        type: "专用机",
        pilot: "黎星刻",
        image: "https://cdn4.winhlb.com/2025/10/29/6901c59567119.webp",
        description: "神虎由大公赠予中华联邦主力部队。这是由拉克夏塔团队与红莲同时期开发但采用不同设计理念的Knightmare Frame模型。然而，由于驾驶它对体力要求过高而被封存，因此找不到合适的驾驶员。黎星刻证明有能力驾驶它，但即使在40%功率下，这项任务也非常具有压力。",
        specs: {
            height: "4.53m",
            weight: "9.33t",
            armor: "钨",
            power: "樱石能源块",
            developer: "贾巴尔普尔研究中心",
            development: "Chuyen",
            variants: "王虎"
        },
        equipment: {
            standard: [
                { name: "驾驶舱弹射系统", description: "利用火箭助推器使驾驶舱与KMF分离" },
                { name: "履带式陆地滑行推进系统", description: "采用履带式操纵装置而非通常的轮式" }
            ],
            optional: [
                { name: "空中滑翔系统", description: "提供飞行能力" }
            ]
        },
        weapons: {
            fixed: [
                { name: "2 × 腕部带电飞燕爪牙", description: "通过电缆发送强电荷，瞬间摧毁目标Knightmare" },
                { name: "1 × 胸部荷电粒子重炮", description: "天愕霸王荷电粒子重炮，类似Hadron Cannon的武器" }
            ],
            handheld: [
                { name: "1 × 双刃短剑", description: "可伸缩，完全激活时能在刀柄两侧产生刀刃" }
            ]
        },
        design: `<p>由开发黑色骑士团Knightmare的同一团队建造，神虎配备了相同类型的空中滑翔翼系统。其躯干中安装的是强大的重粒子炮（天愕霸王荷电粒子重炮），一种类似于Hadron Cannon的武器；在40%功率下，能够与红莲可翔式改进型辐射波臂的全力相匹敌。在未知（可能是全）功率水平下，它能完全粉碎光辉盾牌屏蔽，即使是不列颠飞艇上的也不例外。</p><p>头部具有独特形状，让人联想到京剧面具。与红莲型KMF一样，它似乎配备了集成环境信息处理组件（相当于事实球），在不使用开/闭功能的情况下展示先进信息收集能力。角状结构似乎是传感器或通信天线。</p><p>其主要武器是两个安装在手腕上的匕首形飞燕爪牙。通过用飞燕爪牙缠绕或刺穿敌人，神虎可以沿电缆发送强电荷，瞬间摧毁接收端的Knightmare。辐射波护盾倾向于阻止沿其电缆的放电。神虎的手腕装甲也可以原地旋转，将飞燕爪牙变成强大的连枷，可兼作盾牌。最后，神虎在肩部附近存储了一把短剑。短剑可伸缩，完全激活时能在刀柄两侧产生刀刃。该剑足够强大，能够切割文森特护卫单位。此外，它在肩部和腰部有白色装甲板，可用作盾牌。</p><p>对于快速移动，通过将脚趾和脚跟上的刀片状部件移动到脚底，它起到类似滚轮旱冰鞋的陆地滑行系统作用。与通常的轮式不同，它具有让人联想到履带的带状操纵装置。</p><p>神虎还有一个特殊的驾驶舱，驾驶员以几乎直立的姿势坐着。与不列颠的椅子型设计和摩托车型红莲相比，它具有能够缩短驾驶舱舱室长度的优点。从前后方向看。似乎因为它具有与钢髅类似的结构而被采用。</p>`,
        combat: `<p>神虎首次出现在小沛战斗，星刻消灭了大量晓并与斑鸠对抗，要求释放年轻的天子 Empress。星刻随后与红月卡莲在她的红莲可翔式中战斗，但在战斗关键时刻，红莲能量耗尽，被神虎带回龙胆，而中华联邦部队与黑色骑士团交战，卡莲被俘并 later 转移给不列颠人。神虎随后出现在八十八帝陵墓，用于领导中国叛军，但被高级宦官、他们的忠诚派部队和不列颠援军切断。</p><p>战斗很快爆发，神虎被基诺·温伯格驾驶的崔斯坦攻击，而中国忠诚派轰炸陵墓试图粉碎黑色骑士团。在战斗高潮时，天子出现并恳求结束战斗，但她随后成为忠诚派钢髅的目标。她被星刻用神虎 shielding，但它 sustained 重 damage。它被鲁路修和他的神虎从 destruction 中拯救，后者 proceeded 消灭宦官部队。后来，神虎被星刻在加入黑色骑士团后使用，以在其解散后统一中华联邦，并出现在鹿儿岛定居点战斗中，与俾斯麦·瓦尔德斯坦和他的加拉哈德决斗。神虎 later 出现在富士山战斗，在那里它领导了对鲁路修及其部队的 initial 袭击。尽管 sustaining 重 damage，它能够从阿瓦隆 rescue 被俘的U.F.N.代表。鲁路修最终赢得战斗，神虎被 captured，但它在Zero镇魂曲之后出现， present  during  Empress 娜娜莉·vi·不列颠 arrival 与日本首相扇要会面。</p>`
    },
    {
        id: 35,
        name_zh: "蜃气楼",
        name_en: "Shinkiro",
        model: "Type-0/0A",
        faction: "black-knights",
        generation: "第7世代",
        type: "专用机",
        pilot: "鲁路修·vi·不列颠、洛洛·兰佩洛基",
        image: "https://cdn4.winhlb.com/2025/10/29/6901c59595fc3.webp",
        description: "蜃气楼是为Zero（鲁路修·vi·不列颠）个人使用建造的第七世代可变形Knightmare Frame。它拥有集成空中滑翔系统用于飞行，并能变形为潜艇/喷气战斗机以在水下移动和/或飞行，鲁路修使用它来未被检测地往返日本。",
        specs: {
            height: "4.67m",
            weight: "8.06t",
            armor: "钨",
            power: "樱石能源块",
            developer: "贾巴尔普尔研究中心",
            derivedFrom: "高文",
            development: "Mahoroba Type-0、Mahoroba Type-01"
        },
        equipment: {
            standard: [
                { name: "绝对防御系统", description: "使用六边形能量屏蔽阵列，可投射到Knightmare的任何部分" },
                { name: "陆地滑行推进系统", description: "利用脚跟处的动力轮大幅提升KMF的机动性" },
                { name: "集成空中滑翔系统", description: "提供飞行能力，并能变形为潜艇/喷气战斗机" },
                { name: "事实球传感器", description: "" },
                { name: "Druid系统", description: "计算传入抛射物轨迹并相应移动屏蔽" }
            ]
        },
        weapons: {
            fixed: [
                { name: "2 × 腕部安装Hadron冲击炮", description: "发射球状爆炸而非连续光束" },
                { name: "1 × 胸部安装扩散结构相转移炮", description: "也称为\"Zero Beam\"，通过棱镜折射成数十个精确激光" },
                { name: "2 × 膝部安装飞燕爪牙", description: "隐藏在膝部，需弯曲膝盖才能发射" },
                { name: "1 × 箔条投放系统", description: "用于干扰和反射" }
            ]
        },
        design: `<p>蜃气楼拥有绝对防御系统，使用六边形能量屏蔽阵列，可投射到Knightmare的任何部分。其Druid系统（从高文改编）计算传入抛射物轨迹并相应移动屏蔽，赋予蜃气楼任何Knightmare Frame中最高的防御力。所有这些由Druid系统和基于键盘的控件控制。该系统需要极其复杂的计算以形成有效屏障，以至于需要鲁路修级别的智力才能充分发挥系统潜力。当洛洛·兰佩洛基尝试使用时，他只能建立带有多个弱点的微弱防御。在其全潜力下，绝对防御系统可以阻挡莫德雷德的Stark Hadron Cannon的持续近距离爆炸，尽管以大部分能量储备为代价。</p><p>其主要武器是胸部安装的扩散结构相转移炮，也称为"Zero Beam"。激活时，一个棱镜状物体从蜃气楼胸部发射。蜃气楼然后向棱镜发射强大光束，将爆炸折射成数十个毁灭性精确激光。光束可以不发射棱镜用于集中攻击。武器发射时必须停用屏蔽。蜃气楼还有一对Hadron冲击炮安装在手腕下方，发射球状爆炸而非连续光束。</p><p>有趣的是，蜃气楼确实有一套飞燕爪牙，隐藏在其膝部内。非正统设计要求蜃气楼弯曲膝盖才能发射它们。鲁路修很少使用此武器，导致许多人认为它不存在于Knightmare上。然而，可以说飞燕爪牙在要塞模式中处于完美位置。此外，蜃气楼安装了至少一个导弹或榴弹发射器，从未在战斗中使用。其单次操作是在思想电梯内，以部署一定量反射箔条，用于干扰查尔斯皇帝有效使用他的Geass，同时允许鲁路修使用反射表面部署他自己的。</p><p>蜃气楼是可变形Knightmare Frame。因此，像崔斯坦一样，它能够变形为骑士要塞。它主要用于运输而非战斗。由于其集成空中滑翔系统，它能够从空中旅行到海底。变形时，蜃气楼将头部降低到躯干中，类似于红莲型单位。蜃气楼还共享与其前身高文相同的黑金配色方案。这是鲁路修的个人请求还是仅仅对其开发自的较大Knightmare Frame的致敬仍未知。</p>`,
        combat: `<p>蜃气楼首次非正式出现在黑色骑士团的Knightmare被交付到蓬莱岛后，在他们流亡和前往中华联邦的旅程中。然而，由鲁路修驾驶的蜃气楼在八十八帝陵墓战斗中首次操作亮相。鲁路修使用其绝对防御系统拯救天子 Empress、星刻和神虎免受中华联邦钢髅的攻击，然后使用其Zero Beam摧毁了几乎所有它们。</p><p>蜃气楼随后出现在鲁路修摧毁Geass教团的行动中，然后在柯内莉亚的意外协助下摧毁了由V.V.驾驶的齐格弗里德。在此行动中，蜃气楼被显示能够不发射其棱镜而发射Zero Beam。</p><p>它还出现在第二次东京战斗中，其中其两个主要弱点被显示。当被莫德雷德交战时，鲁路修没有反击，因为他没有近战武器，而仅仅防御。后来，第十骑士卢西亚诺·布拉德利利用蜃气楼在发射前需要降低屏蔽的弱点损坏其发射棱镜。布拉德利和他的Grausam女武神中队本会摧毁鲁路修，如果不是女武神中队被卡莲在她的红莲圣天八极式中闪电般迅速摧毁。</p><p>蜃气楼后来被洛洛·兰佩洛基使用（尽管很差）以在黑色骑士团在旗舰上背叛他后救援鲁路修。洛洛只能使用蜃气楼的绝对防御场建立微弱防御，并且仅由于他的Geass才能逃脱并超越莫德雷德。由于他对单位缺乏经验，洛洛被迫过度使用他的Geass以成功逃脱黑色骑士团，导致他的死亡。</p><p>鲁路修后来在晋升为不列颠皇帝期间继续使用蜃气楼，并将其与朱雀的兰斯洛特阿尔比昂结合使用以防止F.L.E.I.J.A.弹头在富士山上空引爆。鲁路修然后使用蜃气楼的屏蔽在达摩克利斯的光辉盾牌中创建开口，允许兰斯洛特以及其他几台Knightmare进入浮空堡垒。然而，闯入后，鲁路修和朱雀很快遭遇基诺在他的新崔斯坦分离者中。崔斯坦短暂与蜃气楼交战，但即使绝对防御系统屏蔽也被证明不足以对抗崔斯坦的由加拉哈德的"Excalibur" MVS制成的新剑。在意识到自己被压制后，鲁路修试图深入达摩克利斯，但崔斯坦投掷其中一把剑，它刺穿蜃气楼背部，使其 immobilizing 并摧毁，迫使鲁路修放弃它，他继续深入达摩克利斯。</p><p>在《Code Geass: Lelouch of the Re;surrection》中，出现两台蜃气楼的后继单位，Mahoroba Type-01和Mahoroba Type-0。</p>`
    },
    {
        id: 36,
        name_zh: "齐格菲",
        name_en: "Siegfried",
        model: "FXF-503Y",
        faction: "britannia",
        generation: "",
        type: "试作机",
        pilot: "杰雷米亚·哥特瓦尔德, V.V.",
        image: "https://cdn4.winhlb.com/2025/10/29/6901c599e3eb7.webp",
        description: "齐格菲是由神圣不列颠帝国秘密开发的原型骑士吉加要塞，作为Code R项目的一部分，使用最新Knightmare技术和Geass相关数据。",
        specs: {
            height: "24.69米",
            weight: "58.76吨",
            armor: "钨",
            power: "樱石能源块",
            developer: "神圣不列颠帝国",
            development: "Sutherland Sieg",
            variants: "Siegfried Kai"
        },
        equipment: {
            standard: [
                { name: "电磁装甲", description: "提供能量护盾，极大增强耐久性" },
                { name: "集成浮空系统", description: "使用浮空系统和多个推进器，提供卓越机动性" },
                { name: "事实球传感器", description: "标准传感器系统" }
            ]
        },
        weapons: {
            fixed: [
                { name: "7x 飞燕爪牙", description: "包括五个锥形结构在框架上和两个普通版本在前部，用于攻击和移动" },
                { name: "电击系统", description: "通电机身以击退敌人" }
            ]
        },
        design: `<p>齐格菲不使用标准驾驶舱，而是采用特殊系统，将飞行员的神经系统直接连接到机器的控制系统，实现完全的精神控制。根据杰雷米亚·哥特瓦尔德的说法，由于其独特的控制接口，只有他自己和V.V.能够驾驶此单位。驾驶舱也相当大，允许飞行员在内部自由站立移动。通过使用首次在阿瓦隆上看到的浮空系统和遍布全身的多个推进器，齐格弗里德尽管体积庞大，却拥有卓越的机动性。其武器包括一套飞燕爪牙，由框架上的五个锥形结构和前部安装的两个普通版本组成，以及发电机可以为机身通电以保持敌人距离。使用锥形飞燕爪牙，它可以执行毁灭性攻击，像陀螺一样旋转并摧毁路径上的任何东西。其坚固的结构和能量护盾使其极其耐用；它甚至在建筑物倒塌压在上面时也没有受到任何表面损伤。齐格菲可以快速旋转生成"护盾"以阻挡大多数轰炸。</p>`,
        combat: `<p>齐格菲在第一季结局被Code R测试对象杰雷米亚·哥特瓦尔德偷走，他在听到恐怖分子首领Zero的声音后陷入精神病性愤怒。他使用齐格菲在突破研究设施后追击并交战高文。C.C.最终采取了神风攻击，用她的Knightmare的飞燕爪牙缠住齐格菲并将两者拖入太平洋深处。杰雷米亚设法逃脱，齐格菲最终落入Geass Directorate手中。</p><p>在机身上添加了发电机，并在驾驶舱放置了控制椅以便V.V.驾驶，但它在科内莉亚公主和鲁路修的联合努力下被击败，科内莉亚定制的晓单位击中了齐格菲的唯一弱点，其发电机，严重削弱了单位的压倒性防御力。它最终被神虎的"零光束"射击击落。齐格菲的残骸最终被打捞并与萨瑟兰结合，创建了新的骑士齐格要塞--萨瑟兰·齐格菲，由杰雷米亚在鲁路修麾下服务时使用。</p>`
    }
];
