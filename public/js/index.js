// const modal = document.querySelector('.modal');
// const modalButton = document.querySelector('.modal-button')

// modalButton.addEventListener('click', () => {
//     modal.style.display = 'block';
//     body.style.overflow = 'hidden';
// })

// bar 
var ctx = document.getElementById('chartBar');
var chartBar = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['폭설', '코로나', '교통사고', '산불', '붕괴', '폭발', '화재', '태풍', '홍수'],
        datasets: [{
            label: '검색 수',
            // data: [12, 19, 3, 5, 2, 3],
            // data: [{id: '지진', nested: {value: 12}}, {id: '코로나', nested: {value: 19}},{id: '해일', nested: {value: 3}},
            // {id: '폭설', nested: {value: 5}},{id: '태풍', nested: {value: 2}},{id: '화재', nested: {value: 3}},],
            data: [ 26, 90, 51, 34, 9, 13, 51, 20, 46],
            backgroundColor: [
                // 'rgba(255, 99, 132, 0.2)',
                // 'rgba(54, 162, 235, 0.2)',
                // 'rgba(255, 206, 86, 0.2)',
                // 'rgba(75, 192, 192, 0.2)',
                // 'rgba(153, 102, 255, 0.2)',
                // 'rgba(255, 159, 64, 0.2)',
                // 'rgba(247, 241, 227,0.2)',            
                // 'rgba(132, 129, 122,0.2)',
                // 'rgba(64, 64, 122,0.2)',
                'rgba(209, 216, 224,0.2)', // 흰
                'rgba(252, 92, 101,0.2)', // 빨
                'rgba(69, 170, 242,0.2)', // 파
                'rgba(253, 150, 68,0.2)', // 주
                'rgba(254, 211, 48,0.2)', //노
                'rgba(38, 222, 129,0.2)', //초
                'rgba(165, 94, 234,0.2)', //보
                'rgba(119, 140, 163,0.2)', //회
                'rgba(75, 123, 236,0.2)', //남
                
            ],
            borderColor: [
                // 'rgba(255, 99, 132, 1)',
                // 'rgba(54, 162, 235, 1)',
                // 'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                // 'rgba(255, 159, 64, 1)',
                // 'rgba(247, 241, 227,1.0)',           
                // 'rgba(132,129,122,1)',
                // 'rgba(64, 64, 122,1.0)',
                'rgba(209, 216, 224,1)', // 흰
                'rgba(252, 92, 101,1)', // 빨
                'rgba(69, 170, 242,1)', // 파
                'rgba(253, 150, 68,1)', // 주
                'rgba(254, 211, 48,1)', //노
                'rgba(38, 222, 129,1)', //초
                'rgba(165, 94, 234,1)', //보
                'rgba(119, 140, 163,1)', //회
                'rgba(75, 123, 236,1)', //남
                
            ],
            borderWidth: 1,
        }]
    },
    options: {
        responsive: true,
        scales: {
            //yAxes: [{
              //  ticks: {
                //    beginAtZero: true
                //}
            //}]
        },
        animations: {
            radius: {
              duration: 400,
              easing: 'linear',
              loop: (context) => context.active
            }
          },
          hoverRadius: 12,
          hoverBackgroundColor: [
            // 'rgba(255, 99, 132, 0.5)',
            // 'rgba(54, 162, 235, 0.5)',
            // 'rgba(255, 206, 86, 0.5)',
            // 'rgba(75, 192, 192, 0.5)',
            // 'rgba(153, 102, 255, 0.5)',
            // 'rgba(255, 159, 64, 0.5)',
            // 'rgba(247, 241, 227,0.5)',            
            // 'rgba(132, 129, 122,0.5)',
            // 'rgba(64, 64, 122,0.5)',
            'rgba(209, 216, 224,0.5)', // 흰
            'rgba(252, 92, 101,0.5)', // 빨
            'rgba(69, 170, 242,0.5)', // 파
            'rgba(253, 150, 68,0.5)', // 주
            'rgba(254, 211, 48,0.5)', //노
            'rgba(38, 222, 129,0.5)', //초
            'rgba(165, 94, 234,0.5)', //보
            'rgba(119, 140, 163,0.5)', //회
            'rgba(75, 123, 236,0.5)', //남
        
        ],
          interaction: {
            mode: 'nearest',
            intersect: false,
            axis: 'x'
        },
        plugins: {
            legend: {
                display: false,
                labels: {
                    color: 'rgba(255, 255, 255, 0.788)', // 안먹음
                }
            },
            tooltip: {
                enabled: false
            }
        },
        // parsing: {
        //     xAxisKey: 'id',
        //     yAxisKey: 'nested.value'
        // }
    }
});

// 실시간 sns 재난 현황 전체 업데이트
function updateBar() {
    /* 새로운 데이터 받아오는 부분. */
    // 아래는 임시 
    const labels = ['폭설', '코로나', '교통사고', '산불', '붕괴', '폭발', '화재', '태풍', '홍수']
    const exData = [ 27, 88, 54, 32, 10, 16, 50, 21, 44];
    const rankData = []
    for(let i = 0; i < labels.length; i++){
        rankData.push({
            label: labels[i],
            number: exData[i]
        })
        // debugger;
    }
    console.log('원래 데이터 -전달 전',rankData);
    updateRank(rankData);
    updateChart(chartBar, exData);
    
}

// 실시간 순위 bar 차트 업데이트
function updateChart(chart, newdata) {
    chart.data.datasets.forEach((dataset) => {
        dataset.data = newdata;
    })
    chart.update();
}

const createRankDom = (rank,name)=>{
    const rankItem = document.createElement('div');
    rankItem.classList.add('graph-item');
    rankItem.innerHTML=`
    <div class="rank">${rank}</div>
    <div class="name">${name}</div>
    `
    return rankItem;
}

// 실시간 순위 표 업데이트
function updateRank(rankData) {
    /* 순위대로 정렬 */ 
    /* 돔 업데이트 */

    // 선택정렬
    /*
    {
            label,
            number: exData[index] 
    }
    */
    // 맨 앞부터
    const rankWrapper = document.querySelector('.chartRank');
    rankWrapper.innerHTML = '';

    // for (let index=0; index < rankData.length; index++){ 
    //     console.log(rankData);
    //     let maxIndex = index;
    //     // console.log(rankData[index]);
    //     for(let searchIndex = index+1; searchIndex < rankData.length; searchIndex++){
    //         if(rankData[index].number <= rankData[searchIndex].number) {
    //             // console.log('번호',rankData[index].number,rankData[searchIndex].number);
    //             maxIndex = searchIndex; 
    //         }
    //     } 
    //     // swap
    //     [rankData[index],rankData[maxIndex]] = [rankData[maxIndex],rankData[index]]
    // }

    rankData.sort(function(a, b) {
        if(a.number < b.number) return 1;
        if(a.number > b.number) return -1;
        if(a.number === b.number) return 0;
      });
    
    rankData.forEach((data,index) => {
        const name = data.label;
        const rank = index + 1;
        const dom = createRankDom(rank,name);
        rankWrapper.appendChild(dom);
    });
}

// line
const lineData = {
    datasets: [{
        label: '폭설',
        backgroundColor: 'rgba(209, 216, 224, 0.2)',
        borderColor: 'rgba(209, 216, 224,0.7)', // 흰
        borderwidth: 1,
        fill: false,
        data: [
            {x: '05:41', y: 28},
            {x: '05:42', y: 24},
            {x: '05:43', y: 31},
            {x: '05:44', y: 34},
            {x: '05:45', y: 31},
            {x: '05:46', y: 36},
            {x: '05:47', y: 31},
            {x: '05:48', y: 26},
        ],
    }, {
        label: '코로나',
        backgroundColor: 'rgba(252, 92, 101, 0.2)',
        borderColor: 'rgba(252, 92, 101,0.7)', // 빨
        borderwidth: 1,
        fill: false,
        data: [
            {x: '05:41', y: 87},
            {x: '05:42', y: 82},
            {x: '05:43', y: 94},
            {x: '05:44', y: 87},
            {x: '05:45', y: 88},
            {x: '05:46', y: 81},
            {x: '05:47', y: 86},
            {x: '05:48', y: 90},
        ],
    }, {
        label: '교통사고',
        backgroundColor: 'rgba(69, 170, 242, 0.2)',
        borderColor: 'rgba(69, 170, 242,0.7)', // 파
        borderwidth: 1,
        fill: false,
        data: [
            {x: '05:41', y: 65},
            {x: '05:42', y: 67},
            {x: '05:43', y: 59},
            {x: '05:44', y: 52},
            {x: '05:45', y: 66},
            {x: '05:46', y: 61},
            {x: '05:47', y: 48},
            {x: '05:48', y: 51},
        ],
    }, {
        label: '산불',
        backgroundColor: 'rgba(253, 150, 68, 0.2)',
        borderColor: 'rgba(253, 150, 68,0.7)', // 주
        borderwidth: 1,
        fill: false,
        data: [
            {x: '05:41', y: 36},
            {x: '05:42', y: 34},
            {x: '05:43', y: 26},
            {x: '05:44', y: 39},
            {x: '05:45', y: 22},
            {x: '05:46', y: 28},
            {x: '05:47', y: 31},
            {x: '05:48', y: 34},
        ],
    }, {
        label: '붕괴',
        backgroundColor: 'rgba(254, 211, 48,0.2)',
        borderColor: 'rgba(254, 211, 48,0.7)', //노
        borderwidth: 1,
        fill: false,
        data: [
            {x: '05:41', y: 12},
            {x: '05:42', y: 15},
            {x: '05:43', y: 8},
            {x: '05:44', y: 19},
            {x: '05:45', y: 24},
            {x: '05:46', y: 16},
            {x: '05:47', y: 11},
            {x: '05:48', y:9},
        ],
    }, {
        label: '폭발',
        backgroundColor: 'rgba(38, 222, 129, 0.2)',
        borderColor: 'rgba(38, 222, 129,0.7)', //초
        borderwidth: 1,
        fill: false,
        data: [
            {x: '05:41', y: 21},
            {x: '05:42', y: 14},
            {x: '05:43', y: 16},
            {x: '05:44', y: 11},
            {x: '05:45', y: 23},
            {x: '05:46', y: 21},
            {x: '05:47', y: 8},
            {x: '05:48', y: 13},
        ],
    }, {
        label: '화재',
        backgroundColor: 'rgba(165, 94, 234, 0.2)',
        borderColor: 'rgba(165, 94, 234,0.7)', //보
        borderwidth: 1,
        fill: false,
        data: [
            {x: '05:41', y: 56},
            {x: '05:42', y: 35},
            {x: '05:43', y: 43},
            {x: '05:44', y: 57},
            {x: '05:45', y: 39},
            {x: '05:46', y: 45},
            {x: '05:47', y: 41},
            {x: '05:48', y: 51},
        ],
    }, {
        label: '태풍',
        backgroundColor: 'rgba(119, 140, 163, 0.2)',
        borderColor: 'rgba(119, 140, 163,0.7)', //회
        borderwidth: 1,
        fill: false,
        data: [
            {x: '05:41', y: 27},
            {x: '05:42', y: 34},
            {x: '05:43', y: 26},
            {x: '05:44', y: 33},
            {x: '05:45', y: 19},
            {x: '05:46', y: 23},
            {x: '05:47', y: 16},
            {x: '05:48', y: 20},
        ],
    }, {
        label: '홍수',
        backgroundColor: 'rgba(75, 123, 236, 0.2)',
        borderColor: 'rgba(75, 123, 236, 0.7)', //남
        borderwidth: 1,
        fill: false,
        data: [
            {x: '05:41', y: 37},
            {x: '05:42', y: 23},
            {x: '05:43', y: 43},
            {x: '05:44', y: 56},
            {x: '05:45', y: 34},
            {x: '05:46', y: 65},
            {x: '05:47', y: 53},
            {x: '05:48', y: 46},
        ],
    }, ]
}

var ctxLine = document.getElementById('chartLine');
var chartLine = new Chart(ctxLine, {
    type: 'line',
    data: lineData,
    options: {
        scales: {
            x: {
                // type: 'time',
            }
        },
        responsive: true,
        interaction: {
            intersect: false,
            mode: 'index',
        },
        plugins: {
            legend: {
                display: true,
                position : 'right',
            },
            title: {
                display: false,
            },
            tooltip: {
                position: 'average',
            }
        }
    },
});


function addLine(){
    /* 새로운 데이터 받아오는 부분. */
    const newData = [
        {x: '05:49', y: 27},
        {x: '05:49', y: 88},
        {x: '05:49', y: 54},
        {x: '05:49', y: 32},
        {x: '05:49', y: 10},
        {x: '05:49', y: 16},
        {x: '05:49', y: 50},
        {x: '05:49', y: 21},
        {x: '05:49', y: 44},
    ];
    addChart(chartLine, newData);
}

function addChart(chart, newData){
    if(chart.data.datasets[0].data.length > 50) {
        chart.data.datasets.forEach((dataset, index) => {
            dataset.data.shift();
            dataset.data.push(newData[index]);
        })
    }
    else {
        chart.data.datasets.forEach((dataset, index) => {
            dataset.data.push(newData[index]);
        })
    }

    chart.update();
}





/*

1. SNS 학습되어서 걸러진것 - 성은형
2. 시간 맞춰서 신규 데이터 갱신요청 -> 
- 2.1: 인스타그램
- 2.2: 트위터
- 2.3: 네이버 블로그



*/

function redoDashboard() {
    updateBar();
    addLine();
}

var chartLine1 = new Chart(document.getElementById('chartLine1'), {
    type: 'line',
    data: {
        datasets: [lineData.datasets[0]]
    },
    options: {
        responsive: true,
        interaction: {
            intersect: false,
            mode: 'index',
        },
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
            },
            tooltip: {
                position: 'average',
            }
        }
    },
    
});

var chartLine2 = new Chart(document.getElementById('chartLine2'), {
    type: 'line',
    data: {
        datasets: [lineData.datasets[1]]
    },
    options: {
        responsive: true,
        interaction: {
            intersect: false,
            mode: 'index',
        },
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
            },
            tooltip: {
                position: 'average',
            }
        }
    },
    
});

var chartLine3 = new Chart(document.getElementById('chartLine3'), {
    type: 'line',
    data: {
        datasets: [lineData.datasets[2]]
    },
    options: {
        responsive: true,
        interaction: {
            intersect: false,
            mode: 'index',
        },
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
            },
            tooltip: {
                position: 'average',
            }
        }
    },
    
});

var chartLine4 = new Chart(document.getElementById('chartLine4'), {
    type: 'line',
    data: {
        datasets: [lineData.datasets[3]]
    },
    options: {
        responsive: true,
        interaction: {
            intersect: false,
            mode: 'index',
        },
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
            },
            tooltip: {
                position: 'average',
            }
        }
    },
    
});

var chartLine5 = new Chart(document.getElementById('chartLine5'), {
    type: 'line',
    data: {
        datasets: [lineData.datasets[4]]
    },
    options: {
        responsive: true,
        interaction: {
            intersect: false,
            mode: 'index',
        },
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
            },
            tooltip: {
                position: 'average',
            }
        }
    },
    
});

var chartLine6 = new Chart(document.getElementById('chartLine6'), {
    type: 'line',
    data: {
        datasets: [lineData.datasets[5]]
    },
    options: {
        responsive: true,
        interaction: {
            intersect: false,
            mode: 'index',
        },
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
            },
            tooltip: {
                position: 'average',
            }
        }
    },
    
});

var chartLine7 = new Chart(document.getElementById('chartLine7'), {
    type: 'line',
    data: {
        datasets: [lineData.datasets[6]]
    },
    options: {
        responsive: true,
        interaction: {
            intersect: false,
            mode: 'index',
        },
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
            },
            tooltip: {
                position: 'average',
            }
        }
    },
    
});

var chartLine8 = new Chart(document.getElementById('chartLine8'), {
    type: 'line',
    data: {
        datasets: [lineData.datasets[7]]
    },
    // lineData.datasets[0],
    options: {
        responsive: true,
        interaction: {
            intersect: false,
            mode: 'index',
        },
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
            },
            tooltip: {
                position: 'average',
            }
        }
    },
    
});

var chartLine9 = new Chart(document.getElementById('chartLine9'), {
    type: 'line',
    data: {
        // datasets: [lineData.datasets[8]]
        datasets: [{
            label: '홍수',
            backgroundColor: 'rgba(75, 123, 236, 0.2)',
            borderColor: 'rgba(75, 123, 236, 0.7)', //남
            borderwidth: 1,
            fill: false,
            data: [
                {x: '05:41', y: 37},
                {x: '05:42', y: 23},
                {x: '05:43', y: 43},
                {x: '05:44', y: 56},
                {x: '05:45', y: 34},
                {x: '05:46', y: 65},
                {x: '05:47', y: 53},
                {x: '05:48', y: 46},
            ],
        },]
    },
    options: {
        responsive: true,
        interaction: {
            intersect: false,
            mode: 'index',
        },
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
            },
            tooltip: {
                position: 'average',
            }
        }
    },
    
});


function addOneChart(chart, newData){
    // if(chart.data.datasets[0].data.length > 50) {
    //     chart.data.datasets.forEach((dataset, index) => {
    //         dataset.data.shift();
    //         dataset.data.push(newData[index]);
    //     })
        
    // }
    // else {
    //     chart.data.datasets.forEach((dataset, index) => {
    //         dataset.data.push(newData[index]);
    //     })
    // }
    
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(newData);
    });
    chart.update();
}

function redoCharts() {
    /* 새로운 데이터 받아오는 부분. */
    const newData = [
        {x: '05:49', y: 27},
        {x: '05:49', y: 88},
        {x: '05:49', y: 54},
        {x: '05:49', y: 32},
        {x: '05:49', y: 10},
        {x: '05:49', y: 16},
        {x: '05:49', y: 50},
        {x: '05:49', y: 21},
        {x: '05:49', y: 44},
    ];
    addChart(chartLine, newData);

    addOneChart(chartLine1, newData[0]);
    addOneChart(chartLine2, newData[1]);
    addOneChart(chartLine3, newData[2]);
    addOneChart(chartLine4, newData[3]);
    addOneChart(chartLine5, newData[4]);
    addOneChart(chartLine6, newData[5]);
    addOneChart(chartLine7, newData[6]);
    addOneChart(chartLine8, newData[7]);
    addOneChart(chartLine9, newData[8]);

}