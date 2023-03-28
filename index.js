var num = 1;

var q = {
    1: { title: "문제 1번", type: "EI", A: "E", B: "I" },
    2: { title: "문제 2번", type: "EI", A: "E", B: "I" },
    3: { title: "문제 3번", type: "EI", A: "E", B: "I" },
    4: { title: "문제 4번", type: "SN", A: "S", B: "N" },
    5: { title: "문제 5번", type: "SN", A: "S", B: "N" },
    6: { title: "문제 6번", type: "SN", A: "S", B: "N" },
    7: { title: "문제 7번", type: "TF", A: "T", B: "F" },
    8: { title: "문제 8번", type: "TF", A: "T", B: "F" },
    9: { title: "문제 9번", type: "TF", A: "T", B: "F" },
    10: { title: "문제 10번", type: "JP", A: "J", B: "P" },
    11: { title: "문제 11번", type: "JP", A: "J", B: "P" },
    12: { title: "문제 12번", type: "JP", A: "J", B: "P" },
};

var result = {
    ISTJ: {
        animal: "거북이",
        explain: "청렴결백한 논리주의자",
        img: "turtle.jpg",
    },
    ISFJ: { animal: "코뿔소", explain: "용감한 수호자", img: "rhino.jpg" },
    INFJ: { animal: "팬더", explain: "선의의 옹호자", img: "panda.jpg" },
    INTJ: { animal: "호랑이", explain: "용의주도한 전략가", img: "tiger.jpg" },
    ISTP: { animal: "뱀", explain: "만능 재주꾼", img: "snake.jpg" },
    ISFP: { animal: "고양이", explain: "호기심 많은 예술가", img: "cat.jpg" },
    INFP: { animal: "물개", explain: "열정적인 중재자", img: "seal.jpg" },
    INTP: { animal: "부엉이", explain: "논리적인 사색가", img: "owl.jpg" },
    ESTP: {
        animal: "하이에나",
        explain: "모험을 즐기는 사업가",
        img: "hyena.jpg",
    },
    ESFP: {
        animal: "돌고래",
        explain: "자유로운 영혼의 연예인",
        img: "dolphin.jpg",
    },
    ENFP: {
        animal: "침팬지",
        explain: "재기발랄한 활동가",
        img: "chimpanzee.jpg",
    },
    ENTP: {
        animal: "앵무새",
        explain: "뜨거운 논쟁을 즐기는 변론가",
        img: "parrot.jpg",
    },
    ESTJ: { animal: "늑대", explain: "염격한 관리자", img: "wolf.jpg" },
    ESFJ: { animal: "코끼리", explain: "사교적인 외교관", img: "elephant.jpg" },
    ENFJ: { animal: "강아지", explain: "정의로운 사회운동가", img: "dog.jpg" },
    ENTJ: { animal: "사자", explain: "대담한 통솔자", img: "lion.jpg" },
};

function start() {
    $(".start").hide();
    $(".question").show();
    next();
}

$("#A").click(function () {
    var type = $("#type").val();
    var preValue = $("#" + type).val();
    $("#" + type).val(parseInt(preValue) + 1);
    next();
});

$("#B").click(function () {
    next();
});

function next() {
    if (num == 13) {
        $(".question").hide();
        $(".result").show();
        var mbti = "";
        $("#EI").val() < 2 ? (mbti += "I") : (mbti += "E");
        $("#SN").val() < 2 ? (mbti += "N") : (mbti += "S");
        $("#TF").val() < 2 ? (mbti += "F") : (mbti += "T");
        $("#JP").val() < 2 ? (mbti += "P") : (mbti += "J");
        alert("당신의 MBTI는 " + mbti + " 입니다!");
        $("#img").attr("src", "animals/" + result[mbti]["img"]);
        $("#animal").html(result[mbti]["animal"]);
        $("#explain").html(result[mbti]["explain"]);
    } else {
        $(".progress-bar").attr("style", "width: calc(100/12*" + num + "%)");
        $("#title").html(q[num]["title"]);
        $("#type").val(q[num]["type"]);
        $("#A").html(q[num]["A"]);
        $("#B").html(q[num]["B"]);
        num++;
    }
}
