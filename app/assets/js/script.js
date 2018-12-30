//////////////////////
/*CONSTANT VARIABLES*/
//////////////////////
const BUTTON = document.getElementsByTagName('button')
const BUTTON_LENGTH = BUTTON.length

const PIPE_1 = document.getElementById('label_switch_1')
const PIPE_2 = document.getElementById('label_switch_2')
const PIPE_3 = document.getElementById('label_switch_3')
const PIPE_4 = document.getElementById('label_switch_4')
const PIPE_5 = document.getElementById('label_switch_5')
const PIPE_6 = document.getElementById('label_switch_6')
const PIPE_7 = document.getElementById('label_switch_7')
const PIPE_8 = document.getElementById('label_switch_8')
const PIPE_9 = document.getElementById('label_switch_9')
const SWITCH_1 = document.getElementById('button_switch_1')
const SWITCH_2 = document.getElementById('button_switch_2')
const SWITCH_3 = document.getElementById('button_switch_3')
const SWITCH_4 = document.getElementById('button_switch_4')
const SWITCH_5 = document.getElementById('button_switch_5')
const SWITCH_6 = document.getElementById('button_switch_6')
const SWITCH_7 = document.getElementById('button_switch_7')
const SWITCH_8 = document.getElementById('button_switch_8')

const BOTTOM_P1 = document.getElementById('label_bottom_1')
const BOTTOM_P2 = document.getElementById('label_bottom_2')
const BOTTOM_P3 = document.getElementById('label_bottom_3')
const BOTTOM_P4 = document.getElementById('label_bottom_4')
const BOTTOM_P5 = document.getElementById('label_bottom_5')
const BOTTOM_1 = document.getElementById('bottom_box_1')
const BOTTOM_2 = document.getElementById('bottom_box_2')
const BOTTOM_3 = document.getElementById('bottom_box_3')
const BOTTOM_4 = document.getElementById('bottom_box_4')

const MIDDLE_P1 = document.getElementById('label_middle_1')
const MIDDLE_P2 = document.getElementById('label_middle_2')
const MIDDLE_P3 = document.getElementById('label_middle_3')
const MIDDLE_1 = document.getElementById('middle_box_1')
const MIDDLE_2 = document.getElementById('middle_box_2')

const TOP_BOX = document.getElementById('top_box')

///////////
/*VICTORY*/
///////////
function victory() {
	if(TOP_BOX.style.backgroundColor == 'green') {
		for (let  x = 0; x < BUTTON_LENGTH; x++) {
			BUTTON[x].removeEventListener('click', switch_button)
		}
		TOP_BOX.innerHTML='VICTORY!'
	} else {
		return false
	}
}

///////
/*TOP*/
///////
function top_box() {
	if(TOP_BOX.innerHTML == 'AND') {
		if(MIDDLE_1.style.backgroundColor == 'green' && MIDDLE_2.style.backgroundColor == 'green') {
			TOP_BOX.style.backgroundColor='green'
			TOP_BOX.style.borderStyle='outset'
		} else {
			TOP_BOX.style.backgroundColor='red'
			TOP_BOX.style.borderStyle='inset'
		}
	} else if(TOP_BOX.innerHTML == 'OR') {
		if(MIDDLE_1.style.backgroundColor == 'green' || MIDDLE_2.style.backgroundColor == 'green') {
			TOP_BOX.style.backgroundColor='green'
			TOP_BOX.style.borderStyle='outset'
		} else {
			TOP_BOX.style.backgroundColor='red'
			TOP_BOX.style.borderStyle='inset'
		}
	} else if(TOP_BOX.innerHTML == 'NOT') {
		if(MIDDLE_1.style.backgroundColor != 'green' && MIDDLE_2.style.backgroundColor != 'green') {
			TOP_BOX.style.backgroundColor='green'
			TOP_BOX.style.borderStyle='outset'
		} else {
			TOP_BOX.style.backgroundColor='red'
			TOP_BOX.style.borderStyle='inset'
		}
	} else {
		return false
	}

	victory()
}


//////////
/*MIDDLE*/
//////////
function middle_1() {
	if(MIDDLE_1.innerHTML == 'AND') {
		if(BOTTOM_1.style.backgroundColor == 'green' && BOTTOM_2.style.backgroundColor == 'green') {
			MIDDLE_1.style.backgroundColor='green'
			MIDDLE_1.style.borderStyle='outset'
		} else {
			MIDDLE_1.style.backgroundColor='red'
			MIDDLE_1.style.borderStyle='inset'
		}
	} else if(MIDDLE_1.innerHTML == 'OR') {
		if(BOTTOM_1.style.backgroundColor == 'green' || BOTTOM_2.style.backgroundColor == 'green') {
			MIDDLE_1.style.backgroundColor='green'
			MIDDLE_1.style.borderStyle='outset'
		} else {
			MIDDLE_1.style.backgroundColor='red'
			MIDDLE_1.style.borderStyle='inset'
		}
	} else if(MIDDLE_1.innerHTML == 'NOT') {
		if(BOTTOM_1.style.backgroundColor != 'green' && BOTTOM_2.style.backgroundColor != 'green') {
			MIDDLE_1.style.backgroundColor='green'
			MIDDLE_1.style.borderStyle='outset'
		} else {
			MIDDLE_1.style.backgroundColor='red'
			MIDDLE_1.style.borderStyle='inset'
		}
	} else {
		return false
	}

	top_box()

	if(MIDDLE_1.style.backgroundColor == 'green') {
		MIDDLE_P1.style.borderRightColor='green'
		MIDDLE_P2.style.borderLeftColor='green'
	} else {
		MIDDLE_P1.style.borderRightColor='red'
		MIDDLE_P2.style.borderLeftColor='red'
	}
}

function middle_2() {
	if(MIDDLE_2.innerHTML == 'AND') {
		if(BOTTOM_3.style.backgroundColor == 'green' && BOTTOM_4.style.backgroundColor == 'green') {
			MIDDLE_2.style.backgroundColor='green'
			MIDDLE_2.style.borderStyle='outset'
		} else {
			MIDDLE_2.style.backgroundColor='red'
			MIDDLE_2.style.borderStyle='inset'
		}
	} else if(MIDDLE_2.innerHTML == 'OR') {
		if(BOTTOM_3.style.backgroundColor == 'green' || BOTTOM_4.style.backgroundColor == 'green') {
			MIDDLE_2.style.backgroundColor='green'
			MIDDLE_2.style.borderStyle='outset'
		} else {
			MIDDLE_2.style.backgroundColor='red'
			MIDDLE_2.style.borderStyle='inset'
		}
	} else if(MIDDLE_2.innerHTML == 'NOT') {
		if(BOTTOM_3.style.backgroundColor != 'green' && BOTTOM_4.style.backgroundColor != 'green') {
			MIDDLE_2.style.backgroundColor='green'
			MIDDLE_2.style.borderStyle='outset'
		} else {
			MIDDLE_2.style.backgroundColor='red'
			MIDDLE_2.style.borderStyle='inset'
		}
	} else {
		return false
	}

	top_box()

	if(MIDDLE_2.style.backgroundColor == 'green') {
		MIDDLE_P2.style.borderRightColor='green'
		MIDDLE_P3.style.borderLeftColor='green'
	} else {
		MIDDLE_P2.style.borderRightColor='red'
		MIDDLE_P3.style.borderLeftColor='red'
	}
}

//////////
/*BOTTOM*/
//////////
function bottom_1() {
	if(BOTTOM_1.innerHTML == 'AND') {
		if(SWITCH_1.innerHTML == 'ON' && SWITCH_2.innerHTML == 'ON') {
			BOTTOM_1.style.backgroundColor='green'
			BOTTOM_1.style.borderStyle='outset'
		} else {
			BOTTOM_1.style.backgroundColor='red'
			BOTTOM_1.style.borderStyle='inset'
		}
	} else if(BOTTOM_1.innerHTML == 'OR') {
		if(SWITCH_1.innerHTML == 'ON' || SWITCH_2.innerHTML == 'ON') {
			BOTTOM_1.style.backgroundColor='green'
			BOTTOM_1.style.borderStyle='outset'
		} else {
			BOTTOM_1.style.backgroundColor='red'
			BOTTOM_1.style.borderStyle='inset'
		}
	} else if(BOTTOM_1.innerHTML == 'NOT') {
		if(SWITCH_1.innerHTML != 'ON' && SWITCH_2.innerHTML != 'ON') {
			BOTTOM_1.style.backgroundColor='green'
			BOTTOM_1.style.borderStyle='outset'
		} else {
			BOTTOM_1.style.backgroundColor='red'
			BOTTOM_1.style.borderStyle='inset'
		}
	} else {
		return false
	}

	middle_1()

	if(BOTTOM_1.style.backgroundColor == 'green') {
		BOTTOM_P1.style.borderRightColor='green'
		BOTTOM_P2.style.borderLeftColor='green'
	} else {
		BOTTOM_P1.style.borderRightColor='red'
		BOTTOM_P2.style.borderLeftColor='red'
	}
}

function bottom_2() {
	if(BOTTOM_2.innerHTML == 'AND') {
		if(SWITCH_3.innerHTML == 'ON' && SWITCH_4.innerHTML == 'ON') {
			BOTTOM_2.style.backgroundColor='green'
			BOTTOM_2.style.borderStyle='outset'
		} else {
			BOTTOM_2.style.backgroundColor='red'
			BOTTOM_2.style.borderStyle='inset'
		}
	} else if(BOTTOM_2.innerHTML == 'OR') {
		if(SWITCH_3.innerHTML == 'ON' || SWITCH_4.innerHTML == 'ON') {
			BOTTOM_2.style.backgroundColor='green'
			BOTTOM_2.style.borderStyle='outset'
		} else {
			BOTTOM_2.style.backgroundColor='red'
			BOTTOM_2.style.borderStyle='inset'
		}
	} else if(BOTTOM_2.innerHTML == 'NOT') {
		if(SWITCH_3.innerHTML != 'ON' && SWITCH_4.innerHTML != 'ON') {
			BOTTOM_2.style.backgroundColor='green'
			BOTTOM_2.style.borderStyle='outset'
		} else {
			BOTTOM_2.style.backgroundColor='red'
			BOTTOM_2.style.borderStyle='inset'
		}
	} else {
		return false
	}

	middle_1()

	if(BOTTOM_2.style.backgroundColor == 'green') {
		BOTTOM_P2.style.borderRightColor='green'
		BOTTOM_P3.style.borderLeftColor='green'
	} else {
		BOTTOM_P2.style.borderRightColor='red'
		BOTTOM_P3.style.borderLeftColor='red'
	}
}

function bottom_3() {
	if(BOTTOM_3.innerHTML == 'AND') {
		if(SWITCH_5.innerHTML == 'ON' && SWITCH_6.innerHTML == 'ON') {
			BOTTOM_3.style.backgroundColor='green'
			BOTTOM_3.style.borderStyle='outset'
		} else {
			BOTTOM_3.style.backgroundColor='red'
			BOTTOM_3.style.borderStyle='inset'
		}
	} else if(BOTTOM_3.innerHTML == 'OR') {
		if(SWITCH_5.innerHTML == 'ON' || SWITCH_6.innerHTML == 'ON') {
			BOTTOM_3.style.backgroundColor='green'
			BOTTOM_3.style.borderStyle='outset'
		} else {
			BOTTOM_3.style.backgroundColor='red'
			BOTTOM_3.style.borderStyle='inset'
		}
	} else if(BOTTOM_3.innerHTML == 'NOT') {
		if(SWITCH_5.innerHTML != 'ON' && SWITCH_6.innerHTML != 'ON') {
			BOTTOM_3.style.backgroundColor='green'
			BOTTOM_3.style.borderStyle='outset'
		} else {
			BOTTOM_3.style.backgroundColor='red'
			BOTTOM_3.style.borderStyle='inset'
		}
	} else {
		return false
	}

	middle_2()

	if(BOTTOM_3.style.backgroundColor == 'green') {
		BOTTOM_P3.style.borderRightColor='green'
		BOTTOM_P4.style.borderLeftColor='green'
	} else {
		BOTTOM_P3.style.borderRightColor='red'
		BOTTOM_P4.style.borderLeftColor='red'
	}
}

function bottom_4() {
	if(BOTTOM_4.innerHTML == 'AND') {
		if(SWITCH_7.innerHTML == 'ON' && SWITCH_8.innerHTML == 'ON') {
			BOTTOM_4.style.backgroundColor='green'
			BOTTOM_4.style.borderStyle='outset'
		} else {
			BOTTOM_4.style.backgroundColor='red'
			BOTTOM_4.style.borderStyle='inset'
		}
	} else if(BOTTOM_4.innerHTML == 'OR') {
		if(SWITCH_7.innerHTML == 'ON' || SWITCH_8.innerHTML == 'ON') {
			BOTTOM_4.style.backgroundColor='green'
			BOTTOM_4.style.borderStyle='outset'
		} else {
			BOTTOM_4.style.backgroundColor='red'
			BOTTOM_4.style.borderStyle='inset'
		}
	} else if(BOTTOM_4.innerHTML == 'NOT') {
		if(SWITCH_7.innerHTML != 'ON' && SWITCH_8.innerHTML != 'ON') {
			BOTTOM_4.style.backgroundColor='green'
			BOTTOM_4.style.borderStyle='outset'
		} else {
			BOTTOM_4.style.backgroundColor='red'
			BOTTOM_4.style.borderStyle='inset'
		}
	} else {
		return false
	}

	middle_2()

	if(BOTTOM_4.style.backgroundColor == 'green') {
		BOTTOM_P4.style.borderRightColor='green'
		BOTTOM_P5.style.borderLeftColor='green'
	} else {
		BOTTOM_P4.style.borderRightColor='red'
		BOTTOM_P5.style.borderLeftColor='red'
	}
}

//////////
/*SWITCH*/
//////////
function switch_pipe() {
	if(SWITCH_1.innerHTML == 'ON') {
		PIPE_1.style.borderRightColor='green'
		PIPE_2.style.borderLeftColor='green'
	} else {
		PIPE_1.style.borderRightColor='red'
		PIPE_2.style.borderLeftColor='red'
	}

	if(SWITCH_2.innerHTML == 'ON') {
		PIPE_2.style.borderRightColor='green'
		PIPE_3.style.borderLeftColor='green'
	} else {
		PIPE_2.style.borderRightColor='red'
		PIPE_3.style.borderLeftColor='red'
	}

	if(SWITCH_3.innerHTML == 'ON') {
		PIPE_3.style.borderRightColor='green'
		PIPE_4.style.borderLeftColor='green'
	} else {
		PIPE_3.style.borderRightColor='red'
		PIPE_4.style.borderLeftColor='red'
	}

	if(SWITCH_4.innerHTML == 'ON') {
		PIPE_4.style.borderRightColor='green'
		PIPE_5.style.borderLeftColor='green'
	} else {
		PIPE_4.style.borderRightColor='red'
		PIPE_5.style.borderLeftColor='red'
	}

	if(SWITCH_5.innerHTML == 'ON') {
		PIPE_5.style.borderRightColor='green'
		PIPE_6.style.borderLeftColor='green'
	} else {
		PIPE_5.style.borderRightColor='red'
		PIPE_6.style.borderLeftColor='red'
	}

	if(SWITCH_6.innerHTML == 'ON') {
		PIPE_6.style.borderRightColor='green'
		PIPE_7.style.borderLeftColor='green'
	} else {
		PIPE_6.style.borderRightColor='red'
		PIPE_7.style.borderLeftColor='red'
	}

	if(SWITCH_7.innerHTML == 'ON') {
		PIPE_7.style.borderRightColor='green'
		PIPE_8.style.borderLeftColor='green'
	} else {
		PIPE_7.style.borderRightColor='red'
		PIPE_8.style.borderLeftColor='red'
	}

	if(SWITCH_8.innerHTML == 'ON') {
		PIPE_8.style.borderRightColor='green'
		PIPE_9.style.borderLeftColor='green'
	} else {
		PIPE_8.style.borderRightColor='red'
		PIPE_9.style.borderLeftColor='red'
	}
}

function switch_button() {
	if(this.innerHTML == 'OFF') {
		this.innerHTML='ON'
		this.style.backgroundColor='green'
		this.parentElement.style.borderStyle='outset'
	} else {
		this.innerHTML='OFF'
		this.style.backgroundColor='red'	
		this.parentElement.style.borderStyle='inset'
	}
	bottom_1()
	bottom_2()
	bottom_3()
	bottom_4()
	switch_pipe()
}

for (let  x = 0; x < BUTTON_LENGTH; x++) {
	BUTTON[x].addEventListener('click', switch_button)
}

window.onload = bottom_1(), bottom_2(), bottom_3(), bottom_4(), middle_1(), middle_2()