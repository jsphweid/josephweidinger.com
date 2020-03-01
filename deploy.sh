#!/bin/bash

bucket_name=josephweidinger.com
cloudfront_id=E3BSDY5RDVXFAR

npm run build

aws s3 rm s3://${bucket_name}/ --recursive --exclude "*/*"
aws s3 cp ./public/ s3://${bucket_name}/ --recursive
aws cloudfront create-invalidation --distribution-id ${cloudfront_id} --paths "/*"