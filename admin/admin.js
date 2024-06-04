// sidebar toggle

var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");

function openSidebar() {
    if (!sidebarOpen) {
        sidebar.classList.add("sidebar-responsive");
        sidebarOpen = true;
    }
}

function closeSidebar() {
    if (sidebarOpen) {
        sidebar.classList.remove("sidebar-responsive");
        sidebarOpen = false;
    }
}

// Quan ly khach hang


window.onclick= function(event) {
    openCloseDropdown(event);
}

function closeAllDropdown () {
    let dropdowns = document.getElementsByClassName("dropdown-expand") ;
    for(let i = 0 ; i < dropdowns.length ; i++) {
        dropdowns[i].classList.remove("dropdown-expand")
    }
}

function openCloseDropdown (event) {
    if(!event.target.matches(".dropdown-toggle")) {
        closeAllDropdown();  //đóng dropdown khi click ra khỏi thanh dropdown menu 
    } else {
        let toggle = event.target.dataset.toggle;
        let content = document.getElementById(toggle);
    if(content.classList.contains("dropdown-expand")) {
        content.classList.remove("dropdown-expand");
        closeAllDropdown();
    } else {
        closeAllDropdown();
        content.classList.add("dropdown-expand");
    }
    }
}
document.addEventListener('DOMContentLoaded', function () {
    //  lấy dữ liệu từ local storage về
    let users = JSON.parse(localStorage.getItem('users')) || [];
    
    // tạo element của HTML
    let userList = document.getElementById('userList');
    let table = document.createElement('table'); // tạo một cái element table
    table.classList.add('table-users');

    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    // tạo tr
    let headerRow = document.createElement('tr');
    ['ID', 'Tên đăng nhập', 'Email', 'Loại', 'Ngày', 'Hoạt động'].forEach(text => {
        let th = document.createElement('th');
        th.textContent = text;
        headerRow.appendChild(th); // appendChild(th) thêm element con vào element cha
    });

    thead.appendChild(headerRow);

    // từng hàng users
    users.forEach(user => {
        let tr = document.createElement('tr');
        // console.log(Object.values(user));
        // lấy hết giá trị trong object user trừ pasword và thẻ card, trạng thái
        let {password,card, status,...restInfoUser } = user;
        Object.values(restInfoUser).forEach(value => {
            let td = document.createElement('td');
            td.textContent = value;
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
        // nếu là status thì thêm toggle button
        // <div class="form-check form-switch">
        //     <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
        //     <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
        // </div>
        // let input = document.createElement('input');
        // input.type= "checkbox";
        // input.checked =user['status'];
        // let td2 = document.createElement('td');
        // td2.appendChild(input);
        // tr.appendChild(td2);

    });

    table.appendChild(thead);
    table.appendChild(tbody);
    userList.appendChild(table);

});

// Bar Charts Basic: apexcharts

const barChartOptions = {
    series: [
        {
            data: [8, 14, 4, 6, 10],
            name: 'Products',
        },
    ],
    chart: {
        type: 'bar',
        background: 'transparent',
        height: 350,
        toolbar: {
            show: false,
        },
    },
    colors: ['#2962ff', '#d50000', '#2e7d32', '#ff6d00', '#583cb3'],
    plotOptions: {
        bar: {
            distributed: true,
            borderRadius: 4,
            horizontal: false,
            columnWidth: '40%',
        },
    },
    dataLabels: {
        enabled: false,
    },
    fill: {
        opacity: 1,
    },
    grid: {
        borderColor: '#55596e',
        yaxis: {
            lines: {
                show: true,
            },
        },
        xaxis: {
            lines: {
                show: true,
            },
        },
    },
    legend: {
        labels: {
            colors: '#f5f7ff',
        },
        show: true,
        position: 'top',
    },
    stroke: {
        colors: ['transparent'],
        show: true,
        width: 2,
    },
    tooltip: {
        shared: true,
        intersect: false,
        theme: 'dark',
    },
    xaxis: {
        categories: ['Ranchu đỏ trắng', 'Ranchu Đen', 'Lia thia trắng', 'Ranchu Vàng','Lia thia đỏ'],
        title: {
            style: {
                color: '#f5f7ff',
            },
        },
        axisBorder: {
            show: true,
            color: '#55596e',
        },
        axisTicks: {
            show: true,
            color: '#55596e',
        },
        labels: {
            style: {
                colors: '#f5f7ff',
            },
        },
    },
    yaxis: {
        title: {
            text: 'Count',
            style: {
                color: '#f5f7ff',
            },
        },
        axisBorder: {
            color: '#55596e',
            show: true,
        },
        axisTicks: {
            color: '#55596e',
            show: true,
        },
        labels: {
            style: {
                colors: '#f5f7ff',
            },
        },
    },
};

const barChart = new ApexCharts(
    document.querySelector('#bar-chart'),
    barChartOptions
);
barChart.render();

// AREA CHART
const areaChartOptions = {
    series: [
        {
            name: 'Thu Mua',
            data: [31, 40, 23, 67, 42, 109],
        },
        {
            name: 'Đơn Hàng',
            data: [11, 32, 45, 32, 78, 56],
        },
    ],
    chart: {
        type: 'area',
        background: 'transparent',
        height: 350,
        stacked: false,
        toolbar: {
            show: false,
        },
    },
    colors: ['#00ab57', '#d50000'],
    labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6'],
    dataLabels: {
        enabled: false,
    },
    fill: {
        gradient: {
            opacityFrom: 0.4,
            opacityTo: 0.1,
            shadeIntensity: 1,
            stops: [0, 100],
            type: 'vertical',
        },
        type: 'gradient',
    },
    grid: {
        borderColor: '#55596e',
        yaxis: {
            lines: {
                show: true,
            },
        },
        xaxis: {
            lines: {
                show: true,
            },
        },
    },
    legend: {
        labels: {
            colors: '#f5f7ff',
        },
        show: true,
        position: 'top',
    },
    markers: {
        size: 6,
        strokeColors: '#1b2635',
        strokeWidth: 3,
    },
    stroke: {
        curve: 'smooth',
    },
    xaxis: {
        axisBorder: {
            color: '#55596e',
            show: true,
        },
        axisTicks: {
            color: '#55596e',
            show: true,
        },
        labels: {
            offsetY: 5,
            style: {
                colors: '#f5f7ff',
            },
        },
    },
    yaxis: [
        {
            title: {
                text: 'Thu Mua',
                style: {
                    color: '#f5f7ff',
                },
            },
            labels: {
                style: {
                    colors: ['#f5f7ff'],
                },
            },
        },
        {
            opposite: true,
            title: {
                text: 'Đơn Hàng',
                style: {
                    color: '#f5f7ff',
                },
            },
            labels: {
                style: {
                    colors: ['#f5f7ff'],
                },
            },
        },
    ],
    tooltip: {
        shared: true,
        intersect: false,
        theme: 'dark',
    },
};

const areaChart = new ApexCharts(
    document.querySelector('#area-chart'),
    areaChartOptions
);
areaChart.render();