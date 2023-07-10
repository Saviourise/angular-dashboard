import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor() {}

  animateNumbers(): void {
    const price1 = document.getElementById('price1')?.innerHTML;
    const price2 = document.getElementById('price2')?.innerHTML;
    const price3 = document.getElementById('price3')?.innerHTML;

    const startingNum = 0;
    const endingNum1 = Number(price1?.replaceAll(',', '') || '0');
    const endingNum2 = Number(price2?.replaceAll(',', '') || '0');
    const endingNum3 = Number(price3?.replaceAll(',', '') || '0');

    const duration = 1500;
    const range1 = endingNum1 - startingNum;
    const range2 = endingNum2 - startingNum;
    const range3 = endingNum3 - startingNum;
    const increment1 = endingNum1 > startingNum ? 1 : -1;
    const increment2 = endingNum2 > startingNum ? 1 : -1;
    const increment3 = endingNum3 > startingNum ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range1));
    const stepTime2 = Math.abs(Math.floor(duration / range2));
    const stepTime3 = Math.abs(Math.floor(duration / range3));

    let currentNum1 = startingNum;

    const timer1 = setInterval(() => {
      currentNum1 += increment1;
      document.getElementById('price1')!.innerHTML =
        currentNum1.toLocaleString();
      if (currentNum1 === endingNum1) {
        clearInterval(timer1);
      }
    }, stepTime);

    let currentNum2 = startingNum;

    const timer2 = setInterval(() => {
      currentNum2 += increment2;
      document.getElementById('price2')!.innerHTML =
        currentNum2.toLocaleString();
      if (currentNum2 === endingNum2) {
        clearInterval(timer2);
      }
    }, stepTime2);

    let currentNum3 = startingNum;

    const timer3 = setInterval(() => {
      currentNum3 += increment3;
      document.getElementById('price3')!.innerHTML =
        currentNum3.toLocaleString();
      if (currentNum3 === endingNum3) {
        clearInterval(timer3);
      }
    }, stepTime3);
  }

  loadChart(): void {
    new Chart('myChart', {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
          {
            label: 'Transactions made in the past 6 months',
            data: [20, 39, 13, 5, 22, 23],
            backgroundColor: [
              '#0077e4',
              '#0077e4',
              '#0077e4',
              '#0077e4',
              '#0077e4',
              '#0077e4',
            ],
            borderColor: [
              '#0077e4',
              '#0077e4',
              '#0077e4',
              '#0077e4',
              '#0077e4',
              '#0077e4',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        plugins: {
          tooltip: {
            titleFont: {
              family: 'Poppins',
            },
            bodyFont: {
              family: 'Poppins',
            },
          },
          legend: {
            labels: {
              font: {
                family: 'Poppins',
              },
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    new Chart('myChart2', {
      type: 'doughnut',
      data: {
        labels: ['Active', 'Inactive', 'Suspended', 'Deleted'],
        datasets: [
          {
            label: 'Total no. of users',
            data: [443, 103, 13, 5],
            backgroundColor: ['#0077e4', '#a910a4', '#4b596c', '#a91010'],
            borderColor: ['#0077e4', '#a910a4', '#4b596c', '#a91010'],
            borderWidth: 1,
          },
        ],
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: 'Total no. of users',
            font: {
              family: 'Poppins',
            },
          },
          tooltip: {
            titleFont: {
              family: 'Poppins',
            },
            bodyFont: {
              family: 'Poppins',
            },
          },
          legend: {
            labels: {
              font: {
                family: 'Poppins',
              },
            },
          },
        },
      },
    });

    new Chart('myChart3', {
      type: 'line',
      data: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
        ],
        datasets: [
          {
            label: 'Products uploaded in the past 6 months',
            data: [28, 20, 56, 5, 22, 77],
            backgroundColor: [
              '#0077e4',
              '#0077e4',
              '#0077e4',
              '#0077e4',
              '#0077e4',
              '#0077e4',
            ],
            borderColor: [
              '#0077e4',
              '#0077e4',
              '#0077e4',
              '#0077e4',
              '#0077e4',
              '#0077e4',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        plugins: {
          tooltip: {
            titleFont: {
              family: 'Poppins',
            },
            bodyFont: {
              family: 'Poppins',
            },
          },
          legend: {
            labels: {
              font: {
                family: 'Poppins',
              },
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  ngOnInit(): void {
    this.animateNumbers();
    this.loadChart();
  }
}
