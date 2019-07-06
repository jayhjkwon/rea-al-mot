import React from 'react';

export default ({ name }) => {
    return name === 'kor' ? 'Hi Seoul'
         : name === 'aus' ? 'Hi Melbourne'
         : name === 'usa' ? 'Hi Seatle'
         : 'Hi Jeju'
}
