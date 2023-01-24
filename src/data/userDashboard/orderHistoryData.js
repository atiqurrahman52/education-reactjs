import sql from '../../assets/images/profile/sql.webp'
import forex from '../../assets/images/profile/forex.webp'
import python from '../../assets/images/profile/python.webp'
import mySql from '../../assets/images/profile/my-sql.webp'
import tenDays from '../../assets/images/profile/ten-days-code.webp'

const orderHistoryData =[
    {
        id:0,
        img:sql,
        courseName:'Forex Trading: Your Complete Guide to Get Started Like a Pro',
        enrollDate:'10 Apr 2022',
        price:159,
        orderId:'pdg3301',
        status:'95%',
    },
    {
        id:1,
        img:forex,
        courseName:'Learn SQL in 6 days',
        enrollDate:'25 Jun 2022',
        price:59,
        orderId:'pdg3671',
        status:'35%',
    },
    {
        id:2,
        img:python,
        courseName:'SQL - MySQL for Data Analytics and Business Intelligence',
        enrollDate:'08 Oct 2022',
        price:159,
        orderId:'pdg1201',
        status:'55%',
    },
    {
        id:3,
        img:mySql,
        courseName:'100 Days of Code: The CompleteBootcamp for 2022',
        enrollDate:'12 Nov 2022',
        price:59,
        orderId:'pdg5401',
        status:'15%',
    },
    {
        id:4,
        img:tenDays,
        courseName:'Learn Python: The Complete Python Programming Course',
        enrollDate:'16 Dec 2022',
        price:159,
        orderId:'pdg8801',
        status:'0%',
    },
]

export {orderHistoryData}