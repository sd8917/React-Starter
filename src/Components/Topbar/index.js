import React from 'react';
import { user } from '../../utils/mockData';

//Module css
import styles from "./Topbar.module.css"

import { toLower,toUpper } from '../../utils';
const Topbar = () => {
    return ( <div style={{
        backgroundColor: "green",
        color: "white",
        textAlign:'center',
        
    }}>
       <h1 className={styles.top}>This is the TopBar .{user}</h1> 
    </div> );
}
 
export default Topbar;