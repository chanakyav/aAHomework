const dinerBreakfast = function() {
	// foodItems is known as a free variable
	// closures "close over" (capture, hang onto) free variables
	const order = ["cheesy scrambled eggs"];

	// We are going to write a closure (function) right here
	return function closure(newItem) {
		order.push(newItem);
		return `I'd like ${order.join(' and ')} please.`;
	};
};

let bfastOrder = dinerBreakfast();

console.log(bfastOrder("chocolate chip pancakes"));
console.log(bfastOrder("grits"));


