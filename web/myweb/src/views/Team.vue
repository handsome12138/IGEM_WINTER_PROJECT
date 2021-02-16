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
                    avatar: require('@/assets/avatars/chen.jpg'),
                    info: 'this is my info'
                },
                {
                    id: 2,
                    avatar: require('@/assets/avatars/cheng.jpg'),
                    info: 'this is my info'
                },
                {
                    id: 3,
                    avatar: require('@/assets/avatars/huang.jpg'),
                    info: 'this is my info'
                },
                {
                    id: 4,
                    avatar: require('@/assets/avatars/ji.jpg'),
                    info: 'this is my info'
                },
                {
                    id: 5,
                    avatar: require('@/assets/avatars/lei.jpg'),
                    info: 'this is my info'
                },
                {
                    id: 6,
                    avatar: require('@/assets/avatars/shen.jpg'),
                    info: 'this is my info'
                },
                {
                    id: 7,
                    avatar: require('@/assets/avatars/wang.jpg'),
                    info: 'this is my info'
                },
                {
                    id: 8,
                    avatar: require('@/assets/avatars/wu.jpg'),
                    info: 'this is my info'
                },
                {
                    id: 9,
                    avatar: require('@/assets/avatars/yu.jpg'),
                    info: 'this is my info'
                },
                {
                    id: 10,
                    avatar: require('@/assets/avatars/zhang.jpg'),
                    info: 'this is my info'
                },
                {
                    id: 11,
                    avatar: require('@/assets/avatars/zheng.jpg'),
                    info: 'this is my info'
                },
            ]
        }
    }
}
</script>