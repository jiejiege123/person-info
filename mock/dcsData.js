/*
 * @Author: your name
 * @Date: 2020-06-23 17:12:25
 * @LastEditTime: 2020-06-24 18:53:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edi
 * @FilePath: \bpsp-uie:\ICBC\my\mock\table.js
 */
import Mock from 'mockjs'
import { randomNum, getRandomArrayElements } from '@/utils/index'

export default [
  {
    url: '/view',
    type: 'get',
    response: config => {
      const data = Mock.mock({
        // 'items|30': [{
        //   id: '@id',
        //   title: '@sentence(10, 20)',
        //   'status|1': ['published', 'draft', 'deleted'],
        //   author: 'name',
        //   display_time: '@datetime',
        //   pageviews: '@integer(300, 5000)'
        // }],
        totalDataVo: {
          'apiTotalCount|125395-15000': 125395, // 总交易量
          apiRequestCount: '5288', // 饼图-API调用
          getApipSeqnoCount: '5288', // 前置渠道
          qryTrxApipSeqnoCount: '5288' // 后置渠道
        },
        perDayDataVo: {
          'apiTotalCount|2383-3000': 2383, // 日交易量
          apiRequestCount: '1255',
          getApipSeqnoCount: '1255',
          qryTrxApipSeqnoCount: '1255',
          'avgResponseTime|60-150.1-2': 100, // 日平均响应时间
          // 地区交易率排名
          'zoneNo04402Count|5-20': 21,
          'zoneNo02302Count|5-20': 21,
          'zoneNo02303Count|5-20': 21,
          'zoneNo02304Count|5-20': 21,
          'zoneNo02305Count|5-20': 21,
          'zoneNo02306Count|5-20': 21,
          'zoneNo02307Count|5-20': 21,
          'zoneNo02308Count|5-20': 21,
          'zoneNo02309Count|5-20': 21,
          'zoneNo02310Count|5-20': 21,
          'zoneNo02312Count|5-20': 21,
          'zoneNo02313Count|5-20': 21,
          'zoneNo02314Count|5-20': 21,
          'zoneNo02315Count|5-20': 21,
          'zoneNo02316Count|5-20': 21,
          'zoneNo02317Count|5-20': 21,
          'zoneNo02318Count|5-20': 21,
          'zoneNo02319Count|5-20': 21,
          'zoneNo02320Count|5-20': 21,
          'zoneNo02321Count|5-20': 21,
          'zoneNo02322Count|5-20': 21,
          // 渠道总类交易占比
          'channelCounterStaffCount|1-100': 8,
          'channelSelfHelpCount|1-100': 8,
          'channelNetworkCount|1-100': 8,
          'channelPartnerLinkCount|1-100': 8,
          'channelSystemBatchCount|1-100': 8,
          'channelInfoPublishCount|1-100': 8,
          'channelManagementCount|1-100': 8

        },
        avgResponseTimeList: {
          'avgResponseTimeList|61': [
            {
              'avgResponseTime|10-50': 25,
              'apiTotalCount|10-100': 56,
              'apiSuccessTotalCount|10-100': 56
            }
          ]
        },
        througtputMap: { // 交易并发量
          'througtputMap|10': {
            'value|0-15': 2,
            'value1|0-15': 2,
            'value2|0-15': 2,
            'value3|0-15': 2,
            'value4|0-15': 2,
            'value5|0-15': 2,
            'value6|0-15': 2,
            'value7|0-15': 2,
            'value8|0-15': 2,
            'value9|0-15': 2,
            'value10|0-15': 2,
            'value11|0-15': 2,
            'value12|0-15': 2,
            'value13|0-15': 2,
            'value14|0-15': 2,
            'value15|0-15': 2,
            'value16|0-15': 2
          }
        },
        requestedZoneNoList: [
          '02302',
          '02303',
          '02304',
          '02305',
          '02306',
          '02307',
          '02308',
          '02309',
          '02310',
          '02312',
          '02313',
          '02314',
          '02315',
          '02316',
          '02317',
          '02318',
          '02319',
          '02320',
          '02321',
          '02322',
          '04402'
        ]
      })
      const totalDataVo = data.totalDataVo
      const perDayDataVo = data.perDayDataVo
      const requestedZoneNoList = getRandomArrayElements(data.requestedZoneNoList, 6)
      /** 饼图数据处理 */
      const apiRequestCount = Number(randomNum(2, 7))
      const getApipSeqnoCount = 3
      const qryTrxApipSeqnoCount = 12 - 3 - apiRequestCount
      const apiRequestCountDay = Number(randomNum(2, 7))
      const getApipSeqnoCountDay = 3
      const qryTrxApipSeqnoCountDay = 12 - 3 - apiRequestCountDay

      perDayDataVo.apiRequestCount = perDayDataVo.apiTotalCount * apiRequestCountDay / 12
      perDayDataVo.getApipSeqnoCount = perDayDataVo.apiTotalCount * getApipSeqnoCountDay / 12
      perDayDataVo.qryTrxApipSeqnoCount = perDayDataVo.apiTotalCount * qryTrxApipSeqnoCountDay / 12
      totalDataVo.apiRequestCount = totalDataVo.apiTotalCount * apiRequestCount / 12
      totalDataVo.getApipSeqnoCount = totalDataVo.apiTotalCount * getApipSeqnoCount / 12
      totalDataVo.qryTrxApipSeqnoCount = totalDataVo.apiTotalCount * qryTrxApipSeqnoCount / 12

      /** 交易并发量数据处理 */
      const avgResponseTimeList = data.avgResponseTimeList.avgResponseTimeList
      // let througtputMap = []
      // data.througtputMap.througtputMap.forEach(n => {
      //   througtputMap.push(n.value)
      // })
      // console.log(data.througtputMap)
      /** 地区排名数据处理 */
      // perDayDataVo.area
      return {
        code: 200,
        data: {
          totalDataVo: totalDataVo,
          perDayDataVo: perDayDataVo,
          avgResponseTimeList: avgResponseTimeList,
          througtputMap: data.througtputMap.througtputMap,
          requestedZoneNoList: requestedZoneNoList
        }
      }
      // return {
      //   code: 200,
      //   msg: '',
      //   data: {
      //     totalDataVo: {
      //       apiTotalCount: 81872,
      //       apiRequestCount: 81871,
      //       getApipSeqnoCount: 1,
      //       qryTrxApipSeqnoCount: 1
      //     },
      //     perDayDataVo: {
      //       apiTotalCount: 81870,
      //       apiRequestCount: 81870,
      //       getApipSeqnoCount: 0,
      //       qryTrxApipSeqnoCount: 0,
      //       apiSuccessCount: '81870',
      //       totalResponseTime: '9800392',
      //       avgResponseTime: '119.71',
      //       zoneNo04402Count: '80731',
      //       zoneNo02302Count: '1139',
      //       zoneNo02303Count: '0',
      //       zoneNo02304Count: '0',
      //       zoneNo02305Count: '0',
      //       zoneNo02306Count: '0',
      //       zoneNo02307Count: '0',
      //       zoneNo02308Count: '0',
      //       zoneNo02309Count: '0',
      //       zoneNo02310Count: '0',
      //       zoneNo02312Count: '0',
      //       zoneNo02313Count: '0',
      //       zoneNo02314Count: '0',
      //       zoneNo02315Count: '0',
      //       zoneNo02316Count: '0',
      //       zoneNo02317Count: '0',
      //       zoneNo02318Count: '0',
      //       zoneNo02319Count: '0',
      //       zoneNo02320Count: '0',
      //       zoneNo02321Count: '0',
      //       zoneNo02322Count: '0',
      //       channelCounterStaffCount: '0',
      //       channelSelfHelpCount: '0',
      //       channelNetworkCount: '0',
      //       channelPartnerLinkCount: '1139',
      //       channelSystemBatchCount: '80731',
      //       channelInfoPublishCount: '0',
      //       channelManagementCount: '0'
      //     },
      //     throughputMap: {
      //       '2020-06-24 18:17:05': '20',
      //       '2020-06-24 18:17:06': '22'
      //     },
      //     requestedZoneNoList: [
      //       '04402'
      //     ],
      //     avgResponseTimeList: [
      //       {
      //         tradeDatetime: '2020-06-24 17:17',
      //         avgResponseTime: '42.35',
      //         apiTotalCount: '1208',
      //         apiSuccessTotalCount: '1208'
      //       },
      //       {
      //         tradeDatetime: '2020-06-24 17:18',
      //         avgResponseTime: '74.20',
      //         apiTotalCount: '1232',
      //         apiSuccessTotalCount: '1232'
      //       }
      //     ]
      //   }
      // }
    }
  }
]
