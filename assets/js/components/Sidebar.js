class SidebarComponent {
    constructor(containerId) {
        this.container = document.querySelector(containerId);
        this.currentPath = window.location.pathname.split('/').pop() || 'index.html';
        
        // Definition of menu items and their related pages for active state
        this.menuItems = [
            { 
                icon: 'dashboard', 
                label: 'Dashboard', 
                link: 'index.html',
                activeOn: ['index.html', '']
            },
            { 
                icon: 'calendar_month', 
                label: 'Agenda', 
                link: 'agenda.html',
                activeOn: ['agenda.html'] 
            },
            { 
                icon: 'group', 
                label: 'Pacientes', 
                link: 'patients.html',
                activeOn: ['patients.html'] 
            },
            { 
                icon: 'payments', 
                label: 'Caja', 
                link: 'cashbook.html',
                activeOn: ['cashbook.html'] 
            },
            { 
                icon: 'campaign', 
                label: 'Marketing', 
                link: 'marketing.html',
                activeOn: ['marketing.html', 'marketing-funnel.html', 'marketing-birthdays.html'] 
            },
            { 
                icon: 'bar_chart', 
                label: 'Productividad', 
                link: 'productivity.html',
                activeOn: ['productivity.html', 'productivity-appointments.html', 'productivity-procedures.html'] 
            },
            { 
                icon: 'inventory_2', 
                label: 'Inventario', 
                link: 'inventory.html',
                activeOn: ['inventory.html', 'inventory-movements.html'] 
            },
            { 
                icon: 'biotech', 
                label: 'Laboratorio', 
                link: 'laboratory.html',
                activeOn: ['laboratory.html', 'laboratory-inprogress.html', 'laboratory-providers.html', 'laboratory-services.html'] 
            }
        ];
    }

    render() {
        if (!this.container) return;

        const navItemsHtml = this.menuItems.map(item => {
            // Check if current page matches any of the pages that should trigger active state for this item
            const isActive = item.activeOn.includes(this.currentPath) ? 'sidebar__item--active' : '';
            
            return `
                <li class="sidebar__item ${isActive}">
                    <a href="${item.link}" class="sidebar__link">
                        <span class="material-symbols-rounded">${item.icon}</span>
                        <span>${item.label}</span>
                    </a>
                </li>
            `;
        }).join('');

        this.container.innerHTML = `
            <div class="sidebar__logo">
                <span class="material-symbols-rounded sidebar__logo-icon">health_and_safety</span>
                <h1 class="sidebar__title">SaludSync</h1>
            </div>

            <nav class="sidebar__nav">
                <ul class="sidebar__menu">
                    ${navItemsHtml}
                </ul>
            </nav>

            <div class="sidebar__footer">
                <a href="#" class="sidebar__link">
                    <span class="material-symbols-rounded">settings</span>
                    <span>Configuración</span>
                </a>
            </div>
        `;
    }
}
