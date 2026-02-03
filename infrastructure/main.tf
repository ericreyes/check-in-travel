terraform {
  required_version = ">= 1.0"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = "us-west-2"
}

resource "aws_s3_bucket" "check_in_data" {
  bucket = "check-in-travel-data-${var.environment}"
  
  tags = {
    Name        = "Check-in Travel Data"
    Environment = var.environment
  }
}

resource "aws_s3_bucket_versioning" "check_in_data" {
  bucket = aws_s3_bucket.check_in_data.id
  
  versioning_configuration {
    status = "Enabled"
  }
}
