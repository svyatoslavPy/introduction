import React, { useState } from "react";

function CounterComponent() {
	
	const [count, setCount] = useState(0);
	function minus() {
		if (count > 0) {
			setCount(count - 1);
		}
	}
	function plus() {
		setCount(count + 1);
	}
	return ( 
		<React.Fragment>
			<h2>
				Counter: {count}
			</h2>
			<div className="buttons">
				<button onClick={minus}> 
					Minus
				</button>
				<button onClick={plus}>
					Plus
				</button>
			</div>
		</React.Fragment>
	)
}

export default CounterComponent;