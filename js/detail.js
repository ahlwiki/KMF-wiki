// 获取URL参数
function getFrameIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

// 获取阵营中文名称
function getFactionName(faction) {
    const factionMap = {
        'britannia': '不列颠尼亚',
        'black-knights': '黑色骑士团',
        'japan': '日本解放战线',
        'chinese': '中华联邦',
        'eu': 'EU',
        'other': '其他'
    };
    return factionMap[faction] || faction;
}

// 全局变量记录已加载的图片
let loadedImages = new Set();

// 图片加载函数
function loadImage(url, imageElement, loadingElement) {
    // 如果图片已经加载过，直接显示
    if (loadedImages.has(url)) {
        imageElement.src = url;
        loadingElement.style.display = 'none';
        imageElement.style.display = 'block';
        return;
    }
    
    const img = new Image();
    img.onload = function() {
        imageElement.src = url;
        loadedImages.add(url);
        loadingElement.style.display = 'none';
        imageElement.style.display = 'block';
    };
    
    img.onerror = function() {
        loadingElement.innerHTML = `
            <div class="loading-text">
                <div>图片加载失败</div>
                <div style="font-size: 0.8rem; margin-top: 0.5rem;">请检查网络连接</div>
            </div>
        `;
    };
    
    img.src = url;
}

// 加载机体详情
function loadFrameDetail() {
    const frameId = getFrameIdFromURL();
    if (!frameId) {
        showError('未指定机体ID');
        return;
    }
    
    const frame = knightmareFrames.find(f => f.id == frameId);
    
    if (frame) {
        renderFrameDetail(frame);
    } else {
        showError('机体不存在');
    }
}

// 渲染机体详情
function renderFrameDetail(frame) {
    // 设置页面标题
    document.title = `${frame.name_zh} - Code Geass 机甲图鉴`;
    
    // 填充基本信息
    document.getElementById('detail-name').textContent = frame.name_zh;
    document.getElementById('detail-name-en').textContent = frame.name_en;

    // 渲染图片选项卡
    renderImageTabs(frame);
    
    // 填充技术规范表格
    document.getElementById('spec-type').textContent = frame.type;
    document.getElementById('spec-model').textContent = frame.model;
    document.getElementById('spec-generation').textContent = frame.generation;
    document.getElementById('spec-height').textContent = frame.specs.height;
    document.getElementById('spec-weight').textContent = frame.specs.weight;
    document.getElementById('spec-power').textContent = frame.specs.power;
    document.getElementById('spec-armor').textContent = frame.specs.armor;

    // 填充一般数据表格
    document.getElementById('spec-developer').textContent = frame.specs.developer;
    document.getElementById('spec-derived-from').textContent = frame.specs.derivedFrom || "无";
    document.getElementById('spec-development').textContent = frame.specs.development || "无";
    document.getElementById('spec-variants').textContent = frame.specs.variants || "无";
    document.getElementById('spec-faction').textContent = getFactionName(frame.faction);
    document.getElementById('spec-pilot').textContent = frame.pilot;

    // 填充机体描述
    renderDescription(frame.description);
    
    // 填充装备系统
    renderEquipment(frame.equipment);
    
    // 填充武器系统
    renderWeapons(frame.weapons);
    
    // 填充历史背景
    renderHistory(frame);
}

// 渲染图片选项卡
function renderImageTabs(frame) {
    const tabsContainer = document.getElementById('image-tabs');
    const imageElement = document.getElementById('detail-image');
    const loadingElement = document.getElementById('image-loading');
    
    // 清空现有内容
    tabsContainer.innerHTML = '';
    
    // 确定要使用的图片数据
    let images = [];
    if (frame.images && frame.images.length > 0) {
        // 使用新的多图片数据
        images = frame.images;
    } else {
        // 使用旧的单图片数据（向后兼容）
        images = [{
            url: frame.image,
            description: '标准视图'
        }];
    }
    
    // 显示加载提示，隐藏图片
    loadingElement.style.display = 'flex';
    imageElement.style.display = 'none';
    
    // 如果只有一张图片，不显示选项卡，直接显示图片
    if (images.length === 1) {
        tabsContainer.style.display = 'none'; // 隐藏选项卡容器
        loadImage(images[0].url, imageElement, loadingElement);
        return;
    }
    
    // 多张图片时显示选项卡
    tabsContainer.style.display = 'flex'; // 显示选项卡容器
    
    // 创建选项卡
    images.forEach((image, index) => {
        const tab = document.createElement('button');
        tab.className = `image-tab ${index === 0 ? 'active' : ''}`;
        // 将描述直接放在选项卡文本中
        tab.textContent = image.description;
        tab.dataset.imageUrl = image.url;
        
        tab.addEventListener('click', () => {
            // 移除所有选项卡的active类
            document.querySelectorAll('.image-tab').forEach(t => t.classList.remove('active'));
            // 为当前选项卡添加active类
            tab.classList.add('active');
            // 显示加载提示
            loadingElement.style.display = 'flex';
            imageElement.style.display = 'none';
            // 更新图片
            loadImage(image.url, imageElement, loadingElement);
        });
        
        tabsContainer.appendChild(tab);
    });
    
    // 设置第一张图片为默认显示
    if (images.length > 0) {
        loadImage(images[0].url, imageElement, loadingElement);
    }
}

// 其余函数保持不变...
function renderDescription(description) {
    const descriptionContainer = document.getElementById('frame-description');
    
    if (description) {
        descriptionContainer.innerHTML = `
            <p>${description}</p>
        `;
    } else {
        descriptionContainer.innerHTML = '<p>暂无机体描述</p>';
    }
}

function renderEquipment(equipment) {
    const standardContainer = document.getElementById('standard-equipment');
    const optionalContainer = document.getElementById('optional-equipment');
    
    standardContainer.innerHTML = '';
    optionalContainer.innerHTML = '';
    
    if (!equipment) {
        standardContainer.innerHTML = '<div class="weapon-desc">无数据</div>';
        optionalContainer.innerHTML = '<div class="weapon-desc">无数据</div>';
        return;
    }
    
    // 渲染标准装备
    if (equipment.standard && equipment.standard.length > 0) {
        equipment.standard.forEach(item => {
            const equipmentItem = document.createElement('div');
            equipmentItem.className = 'equipment-item';
            equipmentItem.innerHTML = `
                <div class="weapon-name">${item.name}</div>
                <div class="weapon-desc">${item.description}</div>
            `;
            standardContainer.appendChild(equipmentItem);
        });
    } else {
        standardContainer.innerHTML = '<div class="weapon-desc">无数据</div>';
    }
    
    // 渲染可选装备
    if (equipment.optional && equipment.optional.length > 0) {
        equipment.optional.forEach(item => {
            const equipmentItem = document.createElement('div');
            equipmentItem.className = 'equipment-item';
            equipmentItem.innerHTML = `
                <div class="weapon-name">${item.name}</div>
                <div class="weapon-desc">${item.description}</div>
            `;
            optionalContainer.appendChild(equipmentItem);
        });
    } else {
        optionalContainer.innerHTML = '<div class="weapon-desc">无数据</div>';
    }
}

function renderWeapons(weapons) {
    const fixedContainer = document.getElementById('fixed-weapons');
    const handheldContainer = document.getElementById('handheld-weapons');
    const optionalContainer = document.getElementById('optional-weapons');
    
    fixedContainer.innerHTML = '';
    handheldContainer.innerHTML = '';
    optionalContainer.innerHTML = '';
    
    if (!weapons) {
        fixedContainer.innerHTML = '<div class="weapon-desc">无数据</div>';
        handheldContainer.innerHTML = '<div class="weapon-desc">无数据</div>';
        optionalContainer.innerHTML = '<div class="weapon-desc">无数据</div>';
        return;
    }
    
    // 渲染固定式武器
    if (weapons.fixed && weapons.fixed.length > 0) {
        weapons.fixed.forEach(weapon => {
            const weaponItem = document.createElement('div');
            weaponItem.className = 'weapon-item';
            weaponItem.innerHTML = `
                <div class="weapon-name">${weapon.name}</div>
                <div class="weapon-desc">${weapon.description}</div>
            `;
            fixedContainer.appendChild(weaponItem);
        });
    } else {
        fixedContainer.innerHTML = '<div class="weapon-desc">无数据</div>';
    }
    
    // 渲染手持式武器
    if (weapons.handheld && weapons.handheld.length > 0) {
        weapons.handheld.forEach(weapon => {
            const weaponItem = document.createElement('div');
            weaponItem.className = 'weapon-item';
            weaponItem.innerHTML = `
                <div class="weapon-name">${weapon.name}</div>
                <div class="weapon-desc">${weapon.description}</div>
            `;
            handheldContainer.appendChild(weaponItem);
        });
    } else {
        handheldContainer.innerHTML = '<div class="weapon-desc">无数据</div>';
    }
    
    // 渲染可选武器
    if (weapons.optional && weapons.optional.length > 0) {
        weapons.optional.forEach(weapon => {
            const weaponItem = document.createElement('div');
            weaponItem.className = 'weapon-item';
            weaponItem.innerHTML = `
                <div class="weapon-name">${weapon.name}</div>
                <div class="weapon-desc">${weapon.description}</div>
            `;
            optionalContainer.appendChild(weaponItem);
        });
    } else {
        optionalContainer.innerHTML = '<div class="weapon-desc">无数据</div>';
    }
}

function renderHistory(frame) {
    // 设计和发展部分
    if (frame.design) {
        document.getElementById('design-content').innerHTML = frame.design;
    } else {
        document.getElementById('design-content').innerHTML = '<p>暂无设计和发展资料</p>';
    }
    
    // 作战记录部分
    if (frame.combat) {
        document.getElementById('combat-content').innerHTML = frame.combat;
    } else {
        document.getElementById('combat-content').innerHTML = '<p>暂无作战记录资料</p>';
    }
}

function showError(message) {
    document.querySelector('.detail-container').innerHTML = `
        <div class="error-message">
            <h1>${message}</h1>
            <a href="index.html" class="back-btn">返回图鉴</a>
        </div>
    `;
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    // 隐藏页面加载提示
    const pageLoading = document.getElementById('page-loading');
    if (pageLoading) {
        pageLoading.style.display = 'none';
    }
    
    loadFrameDetail();
});
