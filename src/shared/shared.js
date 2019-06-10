
export let getRandomColor = (str) => {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  var h = hash % 360;
  return 'hsla(' + h + ', 60%, 50%)';
};

export let getRandomColor_rgb = () => {
  let colorArray = [
    [
      204, 51, 69
    ],
    [
      110, 51, 204
    ],
    [
      204, 110, 51
    ],
    [
      51, 107, 204
    ],
    [
      51, 204, 51
    ],
    [
      204, 51, 201
    ],
    [
      51, 204, 168
    ],
    [
      204, 59, 51
    ],
    [
      51, 92, 204
    ],
    [
      69, 51, 204
    ],
    [
      204, 69, 51
    ],
    [
      204, 194, 51
    ]
  ];
  let random = Math.floor(Math.random() * 12);
  let rgb_value = `${colorArray[random][0]}, ${colorArray[random][1]}, ${colorArray[random][2]}`;
  let random_color = `rgb(${rgb_value})`;
  let random_bg = `rgba(${rgb_value}, 0.25)`;
  return [random_color, random_bg];
}

export let getImageUrl = (files) => {
  var file = Array.isArray(files) ? files[0] : files;
  var reader = new FileReader();
  let src = "";
  return new Promise((resolve, reject) => {
    reader.onloadend = function () {
      src = reader.result;
      if (src.indexOf("data:image") > -1 || src.indexOf("data:video") > -1)
        resolve(src);
      else if (src.indexOf("data:image") < 0)
        reject("Please upload an image");
    }

    if (file) {
      reader.readAsDataURL(file);
    } else {
      src = "";
      reject("No Files");
    }
  })

}

