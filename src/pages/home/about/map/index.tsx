import React, { FC, useEffect } from 'react'
import * as echarts from 'echarts'
type Props = {
  className?: string
}
const ChinaMap: FC<Props> = () => {
  useEffect(() => {
    const myChart = echarts.init(document.getElementById('main'))
    echarts.registerMap('china', require('../../../../assets/json/china.json'))
    var geoCoordMap: { [key: string]: number[] } = {
      商丘市: [115.741, 34.2828],
      满洲里市: [120.8057, 50.2185],
      义乌市: [120.0037, 29.1028],
      北京市: [116.4551, 40.2539],
      上海市: [121.4648, 31.2891],
    }
    var data = [
      { name: '满洲里市', value: 4 },
      { name: '商丘市', value: 99 },
      { name: '北京市', value: 2 },
      { name: '义乌市', value: 0.5 },
      { name: '上海市', value: -1 },
    ]

    var convertData = function (data: any): { name: any; value: any }[] {
      var res = []
      for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name]
        if (geoCoord) {
          res.push({
            name: data[i].name,
            value: geoCoord.concat(data[i].value),
          })
        }
      }
      return res
    }

    const option: any = {
      tooltip: {
        trigger: 'item',
        formatter: function (params: any) {
          let { name, value } = params
          if (value && value.length === 3) {
            if (value[2] === 99) {
              return `1999年出生在${name}`
            } else if (value[2] === -1) {
              return `目前生活在${name}`
            } else {
              return `在${name}生活了${value[2]}年`
            }
          } else {
            return name
          }
        },
      },
      legend: {
        orient: 'vertical',
        y: 'bottom',
        x: 'right',
        data: ['pm2.5'],
        textStyle: {
          color: '#fff',
        },
      },
      visualMap: {
        type: 'continuous',
        show: false,
        min: 0,
        max: 100,
        inRange: {
        },
        splitNumber: 0.5,
      },
      geo: {
        map: 'china',
        show: true,
        label: {
          normal: {
            show: false,
          },
          emphasis: {
            show: false,
          },
        },
        roam: true,
        itemStyle: {
          normal: {
            areaColor: '#3a7fd5',
            borderColor: '#0a53e9', //线
            shadowColor: '#092f8f', //外发光
            shadowBlur: 20,
          },
          emphasis: {
            areaColor: '#0a2dae', //悬浮区背景
          },
        },
      },
      series: [
        {
          symbolSize: 5,
          label: {
            normal: {
              formatter: '{b}',
              position: 'right',
              show: true,
            },
            emphasis: {
              show: true,
            },
          },
          itemStyle: {
            normal: {
              color: '#fff',
            },
          },
          name: 'light',
          type: 'scatter',
          coordinateSystem: 'geo',
          data: convertData(data),
        },
        {
          type: 'map',
          map: 'china',
          geoIndex: 0,
          aspectScale: 0.75, //长宽比
          showLegendSymbol: false, // 存在legend时显示
          label: {
            normal: {
              show: false,
            },
            emphasis: {
              show: false,
              textStyle: {
                color: '#fff',
              },
            },
          },
          roam: true,
          itemStyle: {
            normal: {
              areaColor: '#031525',
              borderColor: '#3B5077',
            },
            emphasis: {
              areaColor: '#2B91B7',
            },
          },
          animation: false,
          data: data,
        },
        {
          name: 'Top 5',
          type: 'scatter',
          coordinateSystem: 'geo',
          symbol: 'pin',
          symbolSize: [40, 40],
          label: {
            normal: {
              show: true,
              textStyle: {
                color: '#fff',
                fontSize: 9,
              },
              formatter(value: any) {
                return ''
              },
            },
          },
          itemStyle: {
            normal: {
              color: '#D8BC37', //标志颜色
            },
          },
          data: convertData(data),
          showEffectOn: 'render',
          rippleEffect: {
            brushType: 'stroke',
          },
          hoverAnimation: true,
          zlevel: 1,
        },
      ],
    }
    myChart.setOption(option)
    window.addEventListener('resize', function () { 
      myChart.resize();
    })
  }, [])
  return <div id="main" style={{ width: '100%', height: '380px' }}></div>
}
export default ChinaMap
