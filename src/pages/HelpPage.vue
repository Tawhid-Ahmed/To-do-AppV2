<template>
  <q-page class="q-pa-lg">
    <div class="text-h5 q-mt-lg text-center">Help</div>
    <div>
      <q-splitter v-model="splitterModel">
        <template v-slot:before>
          <q-tabs
            v-model="tab"
            vertical
            class="bg-grey-2 text-grey-7"
            active-color="primary"
            indicator-color="purple"
          >
            <q-tab name="mails" label="Mails" />
            <q-tab name="socials" label="Socials" />
            <q-tab name="phone" label="Phone" />
          </q-tabs>
        </template>

        <template v-slot:after>
          <q-tab-panels
            v-model="tab"
            animated
            swipeable
            vertical
            transition-prev="jump-up"
            transition-next="jump-up"
          >
            <q-tab-panel name="mails">
              <div class="text-h4 q-mb-md">Mails</div>
              <q-list>
                <q-item clickable v-ripple>
                  <q-item-section avatar>
                    <q-icon name="email" />
                  </q-item-section>

                  <q-item-section
                    ><a href="mailto:tawhidahmed98@gmail.com"
                      >tawhidahmed98@gmail.com</a
                    ></q-item-section
                  >
                </q-item>
              </q-list>
            </q-tab-panel>

            <q-tab-panel name="socials">
              <div class="text-h4 q-mb-md">Social links</div>
              <q-list>
                <q-item clickable v-ripple>
                  <q-item-section avatar>
                    <q-icon name="facebook" />
                  </q-item-section>

                  <q-item-section>tawhidahmed98@gmail.com</q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                  <q-item-section avatar>
                    <q-icon name="fab fa-twitter" />
                  </q-item-section>

                  <q-item-section>@tawhidahmed </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                  <q-item-section avatar>
                    <q-icon :name="github" />
                  </q-item-section>

                  <q-item-section>tawhidahmed98@gmail.com</q-item-section>
                </q-item>
              </q-list>
            </q-tab-panel>

            <q-tab-panel name="phone">
              <div class="text-h4 q-mb-md">Phone</div>
              <q-list>
                <q-item clickable v-ripple>
                  <q-item-section avatar class="q-pa-none q-mr-xs">
                    <q-item-label
                      ><q-icon name="phone_android" size="25px" /> Mobile:
                    </q-item-label>
                  </q-item-section>

                  <q-item-section class="q-pa-none"
                    ><a href="tel:+1234567890">+1234567890</a></q-item-section
                  >
                </q-item>
                <q-item clickable v-ripple>
                  <q-item-section avatar class="q-pa-none q-mr-xs">
                    <q-item-label
                      ><q-icon
                        name="phone "
                        size="25px"
                      />Telephone:</q-item-label
                    >
                  </q-item-section>

                  <q-item-section class="q-pa-none"
                    ><a href="tel:+1234567890">+1234567890</a></q-item-section
                  >
                </q-item>
                <q-item clickable v-ripple>
                  <q-item-section avatar class="q-pa-none q-mr-xs">
                    <q-item-label
                      ><q-icon name="local_printshop" size="25px" /> Fax:
                    </q-item-label>
                  </q-item-section>

                  <q-item-section class="q-pa-none"
                    ><a href="fax:+19292070142 "
                      >+19292070142
                    </a></q-item-section
                  >
                </q-item>
              </q-list>
            </q-tab-panel>
          </q-tab-panels>
        </template>
      </q-splitter>
    </div>
  </q-page>
</template>

<script>
import { ref, computed } from "vue";

export default {
  setup() {
    const github = `img:data:image/svg+xml;charset=utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>`;
    return {
      tab: ref("mails"),
      splitterModel: ref(20),
      github,
    };
  },
};
</script>
