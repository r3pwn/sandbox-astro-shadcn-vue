<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { Primitive, type PrimitiveProps } from 'radix-vue'
import { type TextVariants, textVariants } from '.'

interface Props extends PrimitiveProps {
  display?: TextVariants['display']
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  as: 'span',
})
</script>

<template>
  <Primitive
    :as="as"
    :class="cn(textVariants({ display }), props.class)"
  >
    <slot />
  </Primitive>
</template>
