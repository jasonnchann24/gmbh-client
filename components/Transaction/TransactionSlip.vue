<template>
  <section class="my-5">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6">
          <h5 class="text-uppercase">4. Transaction Slip</h5>
        </div>
        <div v-if="!item.forms.transfer_evidence" class="col-12 col-md-6">
          <button
            v-if="item.forms.emergency_contact"
            class="btn btn-block btn-primary"
            @click="uploadForm = !uploadForm"
          >
            Upload Transaction Slip
          </button>
          <button v-else class="btn btn-block btn-secondary" disabled>
            Please create emergency contact first
          </button>
        </div>
        <div v-else class="col-12 col-md-6">
          <button
            class="btn btn-block btn-success"
            @click="showTransactionSlip = !showTransactionSlip"
          >
            Transaction Slip Detail
          </button>
        </div>
      </div>
      <div v-if="uploadForm && !item.forms.transfer_evidence">
        <div class="row mt-4">
          <div class="col-12 col-md-6 mt-2">
            <form @submit.prevent="uploadFile">
              <div class="form-group">
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span id="ts-uploadAddon" class="input-group-text"
                      >Upload Transaction Slip</span
                    >
                  </div>
                  <div class="custom-file">
                    <input
                      id="ts-upload"
                      type="file"
                      class="custom-file-input"
                      aria-describedby="ts-uploadAddon"
                      @change="slipFile"
                    />
                    <label class="custom-file-label" for="ts-upload"
                      ><span v-if="!slipName">
                        Choose file
                      </span>
                      <span v-else>
                        {{ slipName }}
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <button
                    v-if="!loading"
                    type="submit"
                    class="btn btn-block btn-success"
                  >
                    Upload
                  </button>
                  <button v-else class="btn btn-block btn-success" disabled>
                    Uploading ...
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div v-else-if="showTransactionSlip && item.forms.transfer_evidence">
        <div class="row mt-4">
          <div class="col-12 mt-4">
            <button type="button" class="btn btn-block btn-success">
              <a
                :href="item.forms.transfer_evidence.image_url"
                target="_blank"
                style="text-decoration: none; color:white"
              >
                View Transaction Slip
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'TransactionSlipComponent',
  data() {
    return {
      uploadForm: false,
      showTransactionSlip: false,
      slip: null,
      slipName: null,
      loading: false
    }
  },
  computed: {
    ...mapGetters({
      TRANSACTION: 'transactions/TRANSACTION'
    }),
    item() {
      return this.TRANSACTION.data
    }
  },
  methods: {
    ...mapActions({
      CREATE_TRANSACTION_SLIP: 'transactions/CREATE_TRANSACTION_SLIP',
      GET_TRANSACTION: 'transactions/GET_TRANSACTION'
    }),
    slipFile(e) {
      const file = e.target.files[0]
      const fileName = e.target.files[0].name
      this.slip = file
      this.slipName = fileName
    },
    async uploadFile() {
      this.loading = true
      const formData = new FormData()
      formData.append('image', this.slip)
      formData.append('transaction_id', this.$route.params.id)

      try {
        await this.CREATE_TRANSACTION_SLIP(formData)
        await this.GET_TRANSACTION(this.$route.params.id)
        this.$swal({
          background: '#f5f5f5',
          icon: 'success',
          title: 'Created!',
          text: `Transaction Slip Uploaded!`,
          showConfirmButton: true
        })
      } catch (e) {
        this.$swal({
          background: '#f5f5f5',
          icon: 'error',
          title: 'Error!',
          text: `Please double check your inputs before submitting!`,
          showConfirmButton: true
        })
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style></style>
