<template>
  <div class="app">
    <div>
      <p>Заполните форму и отправьте данные</p>
    </div>
    <div class="content">
      <dropdown
        :list="list"
        :padding="'2px 15px'"
        @getSelected="getSelected"
        class="MyButton"
      ></dropdown>


      <MyButton
        :active="active"
        :key="String(active)"
        class="loader"
        v-show="loadState"
      >
        <MyLoader
          :height="'15px'"
          :thickness="'3px'"
        />
      </MyButton>

      <MyButton
        :active="active"
        :padding="'2px 15px'"

        :key="String(active)"
        @onClick="onClick"
        class="MyButton"
        v-show="!loadState"
      >
        Создать
      </MyButton>
    </div>
    <div class="content">
      <table>
        <thead>
          <td>Сделки</td>
          <td>Компании</td>
          <td>Контакты</td>
        </thead>
        <td>
          <MyList class="List" :info="leadStore.LeadsList"/>
        </td>
        <td>
          <MyList class="List" :info="companyStore.CompaniesList"/>
        </td>
        <td>
          <MyList class="List" :info="contactsStore.ContactsList"/>
        </td>
      </table>
      </div>
  </div>
</template>

<script lang="ts">
import Dropdown from './components/Dropdown.vue'
import MyButton from './components/MyButton.vue'
import MyList from './components/List.vue'
import MyLoader from './components/Loader.vue'

import { ref, defineComponent } from 'vue'
import { useLeadsStore } from './stores/leadsStore'
import { useContactsStore } from './stores/contactsStore'
import { useCompaniesStore } from './stores/companiesStore'
import { InfoEnum } from './hooks/API'

const list = [
  {id: 0, title: 'Не выбрано', slug: null},
  {id: 1, title: 'Сделка', slug: InfoEnum.LEADS},
  {id: 2, title: 'Контакт', slug: InfoEnum.CONTACTS},
  {id: 3, title: 'Компания', slug: InfoEnum.COMPANIES}
]

export default defineComponent({
  components: {
    Dropdown,
    MyButton,
    MyList,
    MyLoader
  },
  setup(){
    let selected = ref('')
    let active = ref(false)

    const leadStore = useLeadsStore()
    const companyStore = useCompaniesStore()
    const contactsStore = useContactsStore()

    const loadState = ref(false)
    const getSelected = (selectedItem: string)=>{
      selected.value = selectedItem
      console.log(selected.value)

      if(selectedItem != list[0].title){
        active.value = true
      }else{
        active.value = false
      }
    }

    const onClick = ()=>{
      loadState.value = true
      switch(selected.value){
        case list[1].title:
          leadStore.setLead().then(()=>{
            loadState.value = false
          })
          break 
        case list[2].title:
          contactsStore.setContact().then(()=>{
            loadState.value = false
          })
          break 
        case list[3].title:
          companyStore.setCompany().then(()=>{
            loadState.value = false
          })
          break 
        default:
          break
      }
    }

    return {
      list,
      selected,
      getSelected,
      onClick,
      active,
      leadStore,
      companyStore,
      contactsStore,

      loadState
    }
  }
})
</script>

<style>
@font-face {
  font-family: "SF Pro Display";
  src: url('~@/assets/fonts/SF-Pro-Display-Light.otf');
}
@font-face {
  font-family: "SF Pro Display Bold";
  src: url('~@/assets/fonts/SF-Pro-Display-Bold.otf');
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "SF Pro Display";
}
.content{
  display: flex;
  justify-content: center;
  /* flex-basis: 50%; */
}
.content > div{
  margin: 0 10px;
}
.app{
  width: 60vw;
  margin: 0 auto;
  text-align: center;
}

.MyButton >* {
  min-width: 10vw;
}

.loader{
  vertical-align:middle;
  
  }

.loader>*{
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 5vw;
  min-height: 4vh;
}
.List{
  padding: 0 10px;
}

</style>
