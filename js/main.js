// 数据管理类
class KnightmareDatabase {
    constructor() {
        this.frames = knightmareFrames;
        this.filteredFrames = [...this.frames];
        this.currentFilters = {
            faction: '',
            generation: '',
            type: '',
            search: ''
        };
        this.spriteLoaded = false; // 雪碧图加载状态
    }

    // 获取雪碧图URL和尺寸
    getSpriteConfig() {
        const isMobile = window.innerWidth <= 768;
        return {
            url: isMobile 
                ? 'https://cdn4.winhlb.com/2025/10/29/6900f9125d134.png' // 移动端小雪碧图
                : 'https://cdn4.winhlb.com/2025/10/25/68fbc7c8bac53.png', // 桌面端大雪碧图
            size: isMobile ? 75 : 150 // 移动端75px，桌面端150px
        };
    }

    // 应用筛选
    applyFilters(filters) {
        this.currentFilters = { ...this.currentFilters, ...filters };
        
        this.filteredFrames = this.frames.filter(frame => {
            // 阵营筛选
            if (this.currentFilters.faction && frame.faction !== this.currentFilters.faction) {
                return false;
            }
            
            // 世代筛选
            if (this.currentFilters.generation && !frame.generation.includes(this.currentFilters.generation)) {
                return false;
            }
            
            // 类型筛选
            if (this.currentFilters.type) {
                let typeMatch = false;
                switch(this.currentFilters.type) {
                    case 'mass': typeMatch = frame.type === '量产机'; break;
                    case 'special': typeMatch = frame.type === '专用机' || frame.type === '专用试作机'; break;
                    case 'command': typeMatch = frame.type === '指挥官机'; break;
                    case 'prototype': typeMatch = frame.type === '试作机'; break;
                }
                if (!typeMatch) return false;
            }
            
            // 搜索筛选
            if (this.currentFilters.search) {
                const searchTerm = this.currentFilters.search.toLowerCase();
                const searchableText = `${frame.name_zh} ${frame.name_en} ${frame.model} ${frame.pilot}`.toLowerCase();
                if (!searchableText.includes(searchTerm)) {
                    return false;
                }
            }
            
            return true;
        });
        
        this.renderGallery();
        this.updateResultCount();
    }

    // 渲染图鉴
    renderGallery() {
        const grid = document.getElementById('gallery');
        grid.innerHTML = '';

        this.filteredFrames.forEach(frame => {
            const card = this.createFrameCard(frame);
            grid.appendChild(card);
        });
    }

    // 创建机体卡片
    createFrameCard(frame) {
        const card = document.createElement('a');
        card.className = 'frame-card';
        card.href = `detail.html?id=${frame.id}`;
        
        // 获取雪碧图配置
        const spriteConfig = this.getSpriteConfig();
        const spritePosition = -spriteConfig.size * (frame.id - 1);
        
        card.innerHTML = `
            <div class="frame-image-container">
                <!-- 添加雪碧图加载提示 -->
                <div class="sprite-loading" style="display: flex;">
                    <div class="sprite-loading-spinner"></div>
                    <div>加载中...</div>
                </div>
                <div class="frame-image sprite-image" style="background-image: url('${spriteConfig.url}'); background-position: 0 ${spritePosition}px; display: none;"></div>
            </div>
            <div class="frame-info">
                <h3>${frame.name_zh}</h3>
                <p class="model">${frame.model}</p>
                <div class="badges">
                    <span class="faction-badge ${frame.faction}-badge">${this.getFactionName(frame.faction)}</span>
                    <span class="generation-badge">${frame.generation}</span>
                </div>
                <p class="pilot">驾驶员: ${frame.pilot}</p>
            </div>
        `;

        // 预加载雪碧图
        const spriteImage = new Image();
        spriteImage.src = spriteConfig.url;
        spriteImage.onload = () => {
            const loadingElement = card.querySelector('.sprite-loading');
            const imageElement = card.querySelector('.frame-image');
            if (loadingElement && imageElement) {
                loadingElement.style.display = 'none';
                imageElement.style.display = 'block';
            }
            this.spriteLoaded = true;
        };
        
        spriteImage.onerror = () => {
            const loadingElement = card.querySelector('.sprite-loading');
            if (loadingElement) {
                loadingElement.innerHTML = '<div>图片加载失败</div>';
            }
        };

        return card;
    }

    // 获取阵营中文名称
    getFactionName(faction) {
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

    // 更新结果计数
    updateResultCount() {
        document.getElementById('result-count').textContent = this.filteredFrames.length;
    }
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    // 隐藏页面加载提示
    const pageLoading = document.getElementById('page-loading');
    if (pageLoading) {
        pageLoading.style.display = 'none';
    }
    
    const database = new KnightmareDatabase();
    database.renderGallery();
    database.updateResultCount();

    // 筛选器事件监听
    document.getElementById('faction-filter').addEventListener('change', (e) => {
        database.applyFilters({ faction: e.target.value });
    });

    document.getElementById('generation-filter').addEventListener('change', (e) => {
        database.applyFilters({ generation: e.target.value });
    });

    document.getElementById('type-filter').addEventListener('change', (e) => {
        database.applyFilters({ type: e.target.value });
    });

    document.getElementById('search-input').addEventListener('input', (e) => {
        database.applyFilters({ search: e.target.value });
    });

    // 监听窗口大小变化，在移动端/桌面端切换时重新渲染
    window.addEventListener('resize', () => {
        database.renderGallery();
    });
});
