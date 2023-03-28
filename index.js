var num = 1;

var q = {
    1: {
        title: "당신은 대체로 사람들과 함께 있는 것을 좋아하나요, 아니면 혼자 있는 것을 좋아하나요?",
        type: "EI",
        A: "난 사람들과 함께 있는 것이 좋아!",
        B: "혼자 있어도 외롭지 않아. 오히려 혼자가 좋을지도..?",
    },
    2: {
        title: "회사나 파티와 같이 사람들이 많이 모이는 곳에서 본인의 존재감을 느끼기 쉽나요, 아니면 적극적으로 말을 걸어야만 존재감을 느끼나요?",
        type: "EI",
        A: "역시 사람은 소통을 해야지! 적극적으로 말을 걸어야 내 존재감을 느낄 수 있어!",
        B: "나 하나로도 존재감을 느끼기에는 충분해..",
    },
    3: {
        title: "당신은 어떤 일을 시작하기 전에 계획을 세우는 것을 좋아하나요, 아니면 그냥 무작정 시작하는 것을 좋아하나요?",
        type: "EI",
        A: "철저한 계획만이 성공의 지름길이다. 계획부터!",
        B: "인생은 되는대로. 일단 시작하면 길이 보일거야!",
    },
    4: {
        title: "당신은 세부적인 것에 집착하기 보다는 전체적인 그림을 파악하는 것을 좋아하나요, 아니면 세부적인 것에 집착하는 것을 좋아하나요?",
        type: "SN",
        A: "뭐든지 큰 그림을 봐야해. 전체적인 그림을 파악하는게 우선이지!",
        B: "꼼꼼하게 세부적인 것들을 체크하는 디테일이 중요해.",
    },
    5: {
        title: "새로운 아이디어나 가능성이 있는 것에 대해 듣는 것을 좋아하나요, 아니면 이미 검증된 것들에 대해서만 믿음을 가지는 것을 좋아하나요?",
        type: "SN",
        A: "이미 검증된 것 만큼 믿음가는 자료는 없지!",
        B: "새로운 아이디어나 가능성을 듣는 것만큼 흥미로운 일도 없어.",
    },
    6: {
        title: "실제 경험에 의존해서 일을 처리하는 것을 좋아하나요, 아니면 상상력과 직관을 활용해서 일을 처리하는 것을 좋아하나요?",
        type: "SN",
        A: "경험속에서 우러나오는 짬바이브로 해결하는건 뿌듯해.",
        B: "상상력과 직관으로 일을 처리하는건 꼼꼼한 일처리의 기본이지.",
    },
    7: {
        title: "당신은 객관적인 팩트와 정보를 바탕으로 의사결정을 내리는 것을 좋아하나요, 아니면 사람들의 감정이나 생각을 고려해서 의사결정을 내리는 것을 좋아하나요?",
        type: "TF",
        A: "객관적인 팩트와 정보를 토대로 의사결정해야지!",
        B: "사람들의 감정과 생각을 고려하는 것이 중요해.",
    },
    8: {
        title: "어떤 문제를 해결할 때 논리적이고 분석적으로 접근하는 것을 좋아하나요, 아니면 다른 사람들의 감정이나 의견을 먼저 고려하는 것을 좋아하나요?",
        type: "TF",
        A: "논리적이고 분석적으로 접근해야 문제를 쉽게 해결할 수 있어.",
        B: "모든 문제는 사람의 감정과 의견이 따르니까, 이를 고려해서 문제를 해결해야해.",
    },
    9: {
        title: "당신이 어떤 결정을 내릴 때, 논리와 현실성이 중요한 것인가요, 아니면 감정적인 만족감이나 인간관계가 중요한 것인가요?",
        type: "TF",
        A: "논리와 현실성이 중요해!",
        B: "인간관계도 고려해야하고.. 스스로 만족감도 느낄 수 있어야 해.",
    },
    10: {
        title: "당신은 일을 처리할 때 미리 일정을 정해두고 계획을 지키는 것을 좋아하나요, 아니면 일정이 유연하고 자유로운 것을 좋아하나요?",
        type: "JP",
        A: "뭐든지 계획부터! 계획이 없으면 일처리가 어려울 수도 있어.",
        B: "조금은 느긋하게, 마음의 여유를 가지고 처리하자.",
    },
    11: {
        title: "당신은 문제가 발생할 것을 예상해서 미리 대비하는 편인가요, 아니면 문제가 생길 때 즉흥적으로 대처하는 편인가요?",
        type: "JP",
        A: "문제를 미리 대비하는건 중요해. 어떤 일이 일어날지 모르니까 항상 긴장해야한다구.",
        B: "임기응변의 자세. 문제가 생기면 그때마다 처리해버리지.",
    },
    12: {
        title: "미리 정해진 일정에 따라서 움직이는 것이 더 편한가요, 아니면 유연하게 일을 처리하면서 일정을 조절하는 것이 더 편한가요?",
        type: "JP",
        A: "일정대로 움직여야해. 시간을 최대한 알차게 써야지!",
        B: "언제 무슨 일이 생길지 몰라. 그때그때 상황에 맞춰 일정을 조절해야해.",
    },
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
