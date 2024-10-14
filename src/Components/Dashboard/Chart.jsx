/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Text } from "../Texts/Index";
import Chart from 'react-apexcharts';
export const Charts = () => {
    const options = {
        chart: {
            type: 'bar',
            height: 330,
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '65%',
                endingShape: 'rounded',
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            width: 3,
            colors: ['transparent'],
        },
        xaxis: {
            categories: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
        },
        yaxis: {
            title: {
                text: undefined,
            },
            min: 0,
            max: 1000,
        },
        fill: {
            opacity: 1,
        },
        tooltip: {
            shared: true,
            intersect: false,
        },
        legend: {
            show: false,
        },
        colors: ['#F1F1F2', '#E6E6E7'],
    };

    const series = [
        {
            name: 'Series A',
            data: [
                {
                    x: 'JAN',
                    y: 650,
                    fillColor: '#F1F1F2',
                },
                {
                    x: 'FEB',
                    y: 340,
                    fillColor: '#F1F1F2',
                },
                {
                    x: 'MAR',
                    y: 560,
                    fillColor: '#F1F1F2',
                },
                {
                    x: 'APR',
                    y: 380,
                    fillColor: '#F1F1F2',
                },
                {
                    x: 'MAY',
                    y: 500,
                    fillColor: '#F1F1F2',
                },
                {
                    x: 'JUN',
                    y: 650,
                    fillColor: '#FFB800',
                },
                {
                    x: 'JUL',
                    y: 550,
                    fillColor: '#F1F1F2',
                },
                {
                    x: 'AUG',
                    y: 480,
                    fillColor: '#F1F1F2',
                },
                {
                    x: 'SEP',
                    y: 350,
                    fillColor: '#F1F1F2',
                },
                {
                    x: 'OCT',
                    y: 520,
                    fillColor: '#F1F1F2',
                },
                {
                    x: 'NOV',
                    y: 420,
                    fillColor: '#F1F1F2',
                },
                {
                    x: 'DEC',
                    y: 520,
                    fillColor: '#F1F1F2',
                },

            ],
        },
        {
            name: 'Series B',
            data: [
                {
                    x: 'JAN',
                    y: 740,
                    fillColor: '#E6E6E7',
                },
                {
                    x: 'FEB',
                    y: 430,
                    fillColor: '#E6E6E7',
                },
                {
                    x: 'MAR',
                    y: 480,
                    fillColor: '#E6E6E7',
                },
                {
                    x: 'APR',
                    y: 580,
                    fillColor: '#E6E6E7',
                },
                {
                    x: 'MAY',
                    y: 595,
                    fillColor: '#E6E6E7',
                },
                {
                    x: 'JUN',
                    y: 880,
                    fillColor: '#FF8600',
                },
                {
                    x: 'JUL',
                    y: 730,
                    fillColor: '#E6E6E7',
                },
                {
                    x: 'AUG',
                    y: 640,
                    fillColor: '#E6E6E7',
                },
                {
                    x: 'SEP',
                    y: 520,
                    fillColor: '#E6E6E7',
                },
                {
                    x: 'OCT',
                    y: 720,
                    fillColor: '#E6E6E7',
                },
                {
                    x: 'NOV',
                    y: 350,
                    fillColor: '#E6E6E7',
                },
                {
                    x: 'DEC',
                    y: 600,
                    fillColor: '#E6E6E7',
                },

            ],
        },
    ];
    return (
        <div className="row">
            <div className="col-12">
                <div className="card py-3 px-3" style={{ borderRadius: "16px", height: '335px' }}>
                    <div className="font-lexend">
                        <div className="d-flex justify-content-between align-items-center">
                            <Text type="text-lead-dark" text="Overview" />
                            <div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="amb-border mr-2">Robbin Hood</div>
                                    <div className="light-border mr-2">Amreitrade</div>
                                    <div className="light-border mr-2">Fidelity</div>
                                    <div className="light-border">Charles</div>

                                </div>
                            </div>
                        </div>
                        <Chart options={options} series={series} type="bar" height={270} />
                    </div>
                </div>
            </div>


        </div>
    );
};



