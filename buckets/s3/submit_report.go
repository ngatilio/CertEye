import ( 
    "github.com/aws/aws-sdk-go/aws" 
    "github.com/aws/aws-sdk-go/aws/session" 
    "github.com/aws/aws-sdk-go/service/s3"
)

const (
	AWS_S3_REGION = "CERTKOR_REGION"
	AWS_S3_BUCKET = "CERTKOR_BUCKET"
)

func connectAWS() *session.Session {
	sess, err := session.NewSession(
            &aws.Config{
                Region: aws.String(AWS_S3_REGION)
            }
        )
	if err != nil {
		panic(err)
	}
	return sess
}

func UploadFileToS3(s *session.Session, buffer []byte) (string, error) {
	fileName := strconv.FormatInt(time.Now().UTC().UnixNano(), 10)
	_, err := s3.New(s).PutObject(&s3.PutObjectInput{
		Bucket:               aws.String(bucketName),
		Key:                  aws.String(fileName),
		ACL:                  aws.String("public-read"),
		Body:                 bytes.NewReader(buffer),
		ContentLength:        aws.Int64(int64(len(buffer))),
		ContentType:          aws.String(http.DetectContentType(buffer)),
		ContentDisposition:   aws.String("attachment"),
		ServerSideEncryption: aws.String("AES256"),
	})
	return fileName, err
}

func DownloadFileFromS3(s *session.Session, fileName string) {
	f, err := os.Create(fileName)
	if err != nil {
		return
	}
	downloader := s3manager.NewDownloader(s)
	_, err = downloader.Download(f, &s3.GetObjectInput{
		Bucket: aws.String(AWS_S3_BUCKET),
		Key:    aws.String(filename),
	})
	if err != nil {
		// Do your error handling here
		return
	}
}