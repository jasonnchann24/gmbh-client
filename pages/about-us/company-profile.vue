<template>
  <div class="bg-light">
    <div class="container">
      <div class="row">
        <div class="col-12 mt-100">
          <div class="section-heading dark text-center mb-0">
            <span></span>
            <h4>{{ $t('about_profile.title') }}</h4>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 mt-50 text-center">
          <img
            src="/images/logo.png"
            alt="logo-ceo-gmbh"
            width="250"
            height="250"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-12 mt-50">
          <div class="section-heading dark text-center mb-0">
            <span></span>
            <h4>{{ $t('about_profile.who_we_are.title') }}</h4>
          </div>
        </div>
        <div class="col-12 col-lg-8 mt-2 mx-auto">
          <p class="text-justify p-lh">
            {{ $t('about_profile.who_we_are.text1') }}
          </p>
          <p class="text-justify p-lh">
            {{ $t('about_profile.who_we_are.text2') }}
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-12 mt-50">
          <div class="section-heading dark text-center mb-0">
            <span></span>
            <h4>{{ $t('about_profile.our_mission.title') }}</h4>
          </div>
        </div>
        <div class="col-12 col-lg-8 mt-2 mx-auto">
          <p class="text-justify p-lh">
            {{ $t('about_profile.our_mission.text1') }}
          </p>
          <p class="text-justify p-lh">
            {{ $t('about_profile.our_mission.text2') }}
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-12 mt-50">
          <div class="section-heading dark text-center mb-0">
            <span></span>
            <h4>{{ $t('about_profile.why_choose_us.title') }}</h4>
          </div>
        </div>
        <div class="col-12 col-lg-8 mt-2 mx-auto">
          <p class="text-justify p-lh">
            {{ $t('about_profile.why_choose_us.text1') }}
          </p>
          <p class="text-justify p-lh">
            {{ $t('about_profile.why_choose_us.text2') }}
          </p>
          <p class="text-justify p-lh">
            {{ $t('about_profile.why_choose_us.text3') }}
          </p>
          <ul>
            <li
              v-for="(item, index) in $t('about_profile.why_choose_us.ul')"
              :key="index"
            >
              <p>{{ item }}</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col-12 mt-50">
          <div class="section-heading dark text-center mb-0">
            <span></span>
            <h4>{{ $t('about_profile.our_services.title') }}</h4>
          </div>
        </div>
        <div class="col-12 col-lg-8 mt-2 mx-auto">
          <p class="text-justify p-lh">
            {{ $t('about_profile.our_services.text') }}
          </p>
          <div>
            <h5 class="font-weight-bolder">
              1. {{ $t('about_profile.our_services.one.title') }} 🧳
            </h5>
            <p class="text-justify p-lh">
              {{ $t('about_profile.our_services.one.text') }}
            </p>
            <ul>
              <li
                v-for="(item, index) in $t('about_profile.our_services.one.ul')"
                :key="index"
              >
                <p>{{ item }}</p>
              </li>
            </ul>
          </div>
          <div class="mt-4">
            <h5 class="font-weight-bolder">
              2. {{ $t('about_profile.our_services.two.title') }} 🧳
            </h5>
            <ul>
              <li
                v-for="(item, index) in $t('about_profile.our_services.two.ul')"
                :key="index"
              >
                <p>{{ item }}</p>
              </li>
            </ul>
          </div>
          <div class="mt-4">
            <h5 class="font-weight-bolder">
              3. {{ $t('about_profile.our_services.three.title') }} 🧳
            </h5>
            <ul>
              <li
                v-for="(item, index) in $t(
                  'about_profile.our_services.three.ul'
                )"
                :key="index"
              >
                <p>{{ item }}</p>
              </li>
              <li class="text-muted" style="list-style: none">
                VW, OPEL, Audi, Mercedes-Benz, BMW.
              </li>
            </ul>
          </div>
          <div class="mt-4">
            <h5 class="font-weight-bolder">
              4. {{ $t('about_profile.our_services.four.title') }} 🌐
            </h5>
          </div>
          <div class="mt-4 mb-100">
            <h5 class="font-weight-bolder">
              5. {{ $t('about_profile.our_services.five.title') }} 🌐
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CompanyProfilePage'
}
</script>

<style scoped>
.p-lh {
  line-height: 1.9em;
}

li p {
  margin-bottom: 5px;
}

li {
  list-style: circle;
}

ul {
  margin-left: 1.5em;
}

p {
  color: #696969;
}
</style>
