
var ck_name = /^[A-Za-z0-9]{3,60}$/;
var ck_email = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,3})$/
var ck_phoneNumber = /^[0-9]{9,11}$/;

function validForm(form){
	var name = form.name.value;
	var email = form.email.value;
	var phoneNumber = form.phoneNumber.value;
	if (!ck_name.test(name)) {
		alert("Tên không bao gồm các chữ cái, độ dài từ 3 đến 60 kí tự");
		return false;
	}
	if (!ck_email.test(email)) {
		alert("Email không hợp lệ");
		return false;
	}
	if (!ck_phoneNumber.test(phoneNumber) & phoneNumber != "") {
		alert("Số điện thoại bao gồm 9 - 11 kí tự từ 0 - 9");
		return false;
	}
	alert("Cảm ơn bạn đã phản hồi!");
	return true;
}