import React from "react";
import { Link } from "react-router-dom";

function VendingMachine() {
    return (
        <div>
            <h1>Vending Machine</h1>
            <p>
                <Link to="/candy">Candy</Link>
            </p>
            <p>
                <Link to="/chips">Chips</Link>
            </p>
            <p>
                <Link to="/soda">Soda</Link>
            </p>
        </div>
    )
}

export default VendingMachine;