var data = "Ee-s-AIA_M5DnAKo9-cNGpmGEBZN0rq6hCkyaktgc6g1An3lq7bxqhBuKK4uS9b3F2Q2mCZ_NKggkeX7GdFfig===&grant_type=api_key&client_id=IDP";

var xhr = new XMLHttpRequest();
xhr.withCredentials = false;

xhr.addEventListener("readystatechange", function() {
    if (this.readyState === 4) {
        console.log(this.responseText);
    }
});

xhr.open("POST", "https://authenticate.foundation.api.oneatlas.airbus.com/auth/realms/IDP/protocol/openid-connect/token");
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.setRequestHeader("Cache-Control", "no-cache");

xhr.send(data);