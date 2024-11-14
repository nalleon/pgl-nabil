import React, { useEffect, useState } from 'react'
import Cell from "../models/Cell";


/**
 * @author Nabil León Álvarez
 */

type Props = {
    cell : Cell
    modifyCellParent : Function
}
const CellCard = (props: Props) => {
    const { cell } = props;
    const [showContent, setshowContent] = useState(false);

    useEffect(() => {
        
    }, [cell])



    function handleModify(){
        const { modifyCellParent } = props;
        let auxcell = cell;
        auxcell.setIsOpen(true);
        modifyCellParent(auxcell);
    }

    return (
        <>
            <div className="main">
                {
                    
                    <button onClick={handleModify}>{showContent}</button>
                }
                

            </div>
        </>
    )
}

export default CellCard