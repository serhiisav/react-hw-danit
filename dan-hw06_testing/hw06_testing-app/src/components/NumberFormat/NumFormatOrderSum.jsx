import React from "react";
import NumberFormat from "react-number-format";


const NumFormatOrderSum = ({ totalsOrder }) => {
    return (
        <>
            <NumberFormat
                value={totalsOrder}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
                renderText={(value, props) => <span {...props}>{value}</span>}
            />
        </>
    )
}

export default NumFormatOrderSum;