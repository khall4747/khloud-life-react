import React from 'react'
import { Avatar, Box, Stack, Text, useColorModeValue } from '@chakra-ui/react';
export default function store() {
  return (
    <Stack
      bg={useColorModeValue('gray.50', 'gray.800')}
      py={16}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={'center'}
      direction={'column'}>
      <Text
        fontSize={{ base: 'xl', md: '2xl' }}
        textAlign={'center'}
        maxW={'3xl'}>
   ٧/٦/٢٠٢٣ أقترب حفل تخرجي من الجامعه الذي حلمت به منذ صغري كنت احلم بسنة ٢٠٢٣ كنت اعتقد أنها بعيده جدا لكن مر كل شيء لا اعلم ان كان سريعا أم لم انتبه للوقت في أحيان كثيرة نشعر أنّ يوم التخرج يحمل في طياته مشاعر متناقضة مشاعر حزن التغير والبعد عن بعض الاصدقاء الذين كنت اقضي كامل يومي وروتيني معهم ومشاعر الفرح بانتهاء المسيره الدراسية وان كل التعب هان عند الوصول فالحمدلله ان الله مكنني قولاً وفعلاً 

      </Text>
      <Box textAlign={'center'}>
      

        <Text fontWeight={600}>هذا بعضاً مني</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.400', 'gray.400')}>
           ^ - ^
        </Text>
      </Box>
    </Stack>
  )
}
