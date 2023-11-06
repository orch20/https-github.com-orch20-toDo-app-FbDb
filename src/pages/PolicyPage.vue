<template>
    <div class="container" style="height: calc(100vh - 200px); overflow-y: auto;">
        <section class="policy-section">
            <h1>{{ $t("privacyPage.title") }}</h1>
            <h2>{{ $t("privacyPage.section1.subtitle1") }}</h2>
            <p>{{ $t("privacyPage.section1.content11") }}</p>
            <p>{{ $t("privacyPage.section1.content12") }}</p>
            <h2>{{ $t("privacyPage.section2.subtitle2") }}</h2>
            <p>{{ $t("privacyPage.section2.content21") }}</p>
            <h2>{{ $t("privacyPage.section3.subtitle3") }}</h2>
            <p>{{ $t("privacyPage.section3.content31") }}</p>
            <ul>
                <li>{{ $t("privacyPage.section3.content32.0") }}</li>
                <li>{{ $t("privacyPage.section3.content32.1") }}</li>
                <li>{{ $t("privacyPage.section3.content32.2") }}</li>
                <li>{{ $t("privacyPage.section3.content32.3") }}</li>
                <li>{{ $t("privacyPage.section3.content32.4") }}</li>
            </ul>
            <h2>{{ $t("privacyPage.section4.subtitle4") }}</h2>
            <p>{{ $t("privacyPage.section4.content41") }}</p>
            <h2>{{ $t("privacyPage.section5.subtitle5") }}</h2>
            <p>{{ $t("privacyPage.section5.content51") }}</p>
            <h2>{{ $t("privacyPage.section6.subtitle6") }}</h2>
            <p>{{ $t("privacyPage.section6.content61") }}</p>
        </section>
    </div>
</template>

<style scoped>
.policy-section {
    background-color: #f5f5f5;
    padding: 20px;
    border-radius: 5px;
    margin: 20px auto;
    max-width: 800px;
}
.policy-section h2 {
    font-size: 18px;
    margin-top: 10px;
}

/* Style paragraphs */
.policy-section p {
    line-height: 1.5;
    margin-bottom: 10px;
}

/* Style unordered list */
.policy-section ul {
    list-style-type: disc;
    margin-left: 20px;
}
</style>