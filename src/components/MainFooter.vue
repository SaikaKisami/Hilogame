<template>
    <div :class="'footer-container'">
        <div :class="'universal-icon-set'">
            <img src="/icons/IconSetting.svg" />
            <img src="/icons/IconStatus.svg" />
            <img src="/icons/IconFavour.svg" />
        </div>
        <div :class="'fairness-container'">
            Fairness
        </div>
    </div>
</template>

<style scoped>
img {
    cursor: pointer;
}

.footer-container {
    width: 100%;
    height: 5vh;
    display: flex;
    justify-content: space-between;
    background-color: #0F212E;
}

.universal-icon-set {
    display: flex;
    align-items: center;
    justify-content: center;
    border-right-width: 2px;
    border-right-style: solid;
    border-right-color: #2F4552;
    gap: 1.5rem;
    padding-left: 1vw;
    padding-right: 1vw;
}

.fairness-container {
    font-size: 1.125rem;
    color: #B1BAD3;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    font-family: sans-serif;
    letter-spacing: 0.05em;
    padding-top: 0.75rem;
}
</style>