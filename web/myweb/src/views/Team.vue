<template>
    <div>
        <h1>Team</h1>
        <div class="member-card-box">
            <div v-for="member in members" :key="member.id" class='member-card'>
                <img :src="member.avatar" style="width:100%">
                <p>{{member.info}}</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.member-card-box{
    width:80%;
    display:flex;
    margin:auto;
    flex-wrap: wrap;

}

.member-card {
    img{
        border-radius:50px;
        width:100%;
    }
    p{
        text-align: center;
    }
    width:25%;
}
</style>

<script>
export default {
    data(){
        return{
            members: [
                {
                    id: 1,
                    avatar: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=323840868,2919772715&fm=26&gp=0.jpg',
                    info: 'this is my info'
                },
                {
                    id: 2,
                    avatar: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=323840868,2919772715&fm=26&gp=0.jpg',
                    info: 'this is my info'
                },
                {
                    id: 3,
                    avatar: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=323840868,2919772715&fm=26&gp=0.jpg',
                    info: 'this is my info'
                },
                {
                    id: 4,
                    avatar: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=323840868,2919772715&fm=26&gp=0.jpg',
                    info: 'this is my info'
                },
                {
                    id: 5,
                    avatar: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=323840868,2919772715&fm=26&gp=0.jpg',
                    info: 'this is my info'
                },
            ]
        }
    }
}
</script>