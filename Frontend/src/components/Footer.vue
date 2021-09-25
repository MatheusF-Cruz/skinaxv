<template>
    <footer id="footer">
        <p><strong>SkinaXVAutomóveis</strong> &copy; 2021</p>
    </footer>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>
    #footer{
        height: 100px;
        background-color: var(--cinza);
        border-top: 4px solid var(--preto);
        color: var(--branco);
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        }
</style>
