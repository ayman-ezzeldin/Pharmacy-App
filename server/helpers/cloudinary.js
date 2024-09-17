const cloudinary = require('cloudinary').v2
const multer = require('multer')

cloudinary.config({
  cloud_name : 'dh0uukthd',
  api_key : '942847688223617',
  api_secret : 'K8jNE_WP5g4WCgmwIjRaFdJG2FQ'
})

const storage = multer.memoryStorage()
const upload = multer({ storage })

async function imageUploadUtil(file) {
  const result = await cloudinary.uploader.upload(file, {
    resource_type : 'auto'
  })
  return result
}

module.exports = {
  upload,
  imageUploadUtil
}