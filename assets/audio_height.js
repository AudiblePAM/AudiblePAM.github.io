function iOS() {
  return [
    'iPhone Simulator',
    'iPod Simulator',
    'iPhone',
    'iPod'
  ].includes(navigator.platform)
}

var is_ios = iOS();
if (is_ios) {
    const audioPlayers = document.querySelectorAll(".audio");
        for (const player of audioPlayers) {
            var height = player.offsetHeight;;
            player.style.minHeight = (height + 45).toString() + "px"
        }

    const tableHeaders = document.querySelectorAll("th");
    for (const header of tableHeaders) {
        header.style.textAlign = "left"
    }


}