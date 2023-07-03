<template>
    <h4> Grand Child Component </h4>
    <p> User Name: {{ username }}</p>
    <p> MailID: {{ mailid }}</p>
</template>

<script>
export default{
    inject: ['username', 'mailid']
}
</script>