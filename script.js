
function drum() {
    document.addEventListener("keydown", (e) => {
        let ele = document.body.querySelector(`.box[data-key="${e.keyCode}"]`);
        let a1 = document.body.querySelector(`audio[data-key="${e.keyCode}"]`);

        if (a1 && ele) {
            ele.classList.add("effect");
            setInterval(() => {
                ele.classList.remove("effect");
            }, 200);
            a1.currentTime = 0;
            a1.play();

        }


    });

}
drum();