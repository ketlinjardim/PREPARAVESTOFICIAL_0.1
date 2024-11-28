
  
    const images =  [
      {
        name: '0.png',
        image: require('../../assets/avatares/0.png'),
      },
      {
        name: '1.png',
        image: require('../../assets/avatares/1.png'),
      },
      {
        name: '2.png',
        image: require('../../assets/avatares/2.png'),
      },
      {
        name: '3.png',
        image: require('../../assets/avatares/3.png'),
      },
      {
        name: '4.png',
        image: require('../../assets/avatares/4.png'),
      },
      {
        name: '5.png',
        image: require('../../assets/avatares/5.png'),
      },
      {
        name: '6.png',
        image: require('../../assets/avatares/6.png'),
      },
      {
        name: '7.png',
        image: require('../../assets/avatares/7.png'),
      },
      {
        name: '8.png',
        image: require('../../assets/avatares/8.png'),
      },
      {
        name: '9.png',
        image: require('../../assets/avatares/9.png'),
      },
      {
        name: '10.png',
        image: require('../../assets/avatares/10.png'),
      },
      {
        name: '11.png',
        image: require('../../assets/avatares/11.png'),
      },
      {
        name: '12.png',
        image: require('../../assets/avatares/12.png'),
      },
      {
        name: '13.png',
        image: require('../../assets/avatares/13.png'),
      },
      {
        name: '14.png',
        image: require('../../assets/avatares/14.png'),
      },
      {
        name: '15.png',
        image: require('../../assets/avatares/15.png'),
      },
      {
        name: '16.png',
        image: require('../../assets/avatares/16.png'),
      },
    ];
  
    export default function GetImage(name){
        const found = images.find(e => e.name === name);
        return found ? found.image : null;
      };