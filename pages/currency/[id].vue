<!-- [id].vue creates a dynamic route mysite/currency/{id}
where the id changes based on route/url -->
<script setup>
// useRoute pulls information from the routes url
  const route = useRoute()
  const { data } = await useFetch('/api/ticker/?id=' + route.params.id)
  const coin = data.value[0]
</script>

<template>
  <div>
    <h2>{{ coin.name }} Detail page</h2>
    <!-- No need for v-for because we are only showing data fro one coin -->
    <table border="1 px solid">
      <thead>
        <th>Symbol</th>
        <th>Rank</th>
        <th>Price - US $</th>
        <th>Market Cap - US $</th>
      </thead>
      <tr>
        <td>{{ coin.symbol }}</td>
        <td>{{ coin.rank }}</td>
        <td>{{ coin.price_usd }}</td>
        <td>{{ coin.market_cap_usd }}</td>
      </tr>
    </table>
  </div>
</template>

<style>
</style>