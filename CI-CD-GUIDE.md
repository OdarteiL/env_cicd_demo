# 🚀 CI/CD Multi-Environment Pipeline Guide

## 📁 Project Structure
```
.github/workflows/
├── dev-deploy.yml      # Dev environment deployment
├── test-pipeline.yml   # Testing and static analysis
├── staging-deploy.yml  # Staging deployment + integration tests
└── prod-deploy.yml     # Production deployment + health checks

config/
├── dev.env            # Development environment variables
├── test.env           # Test environment variables
├── staging.env        # Staging environment variables
└── prod.env           # Production environment variables
```

## 🌊 Pipeline Flow

```
dev branch → test branch → staging branch → main branch
    ↓            ↓             ↓              ↓
  Deploy      Static Code   Integration    Production
   Only       Analysis +     Tests +        Deploy +
             Unit Tests     Deploy        Monitoring
```

## 📋 Workflow Details

### 1. **Dev Deploy** (`dev-deploy.yml`)
**Triggers:** Push to `dev` branch
- ✅ Basic build and deployment
- ✅ Health check
- ✅ Quick feedback for developers

### 2. **Test Pipeline** (`test-pipeline.yml`)
**Triggers:** Push/PR to `test` branch
- 🔍 ESLint static analysis
- 🧪 Jest unit tests with coverage
- 🔒 Security audit (npm audit)
- 🐳 Docker security scan (Trivy)
- 📊 Test reports and artifacts

### 3. **Staging Deploy** (`staging-deploy.yml`)
**Triggers:** Push to `staging` branch
- 🔄 Pre-deployment tests
- 🚀 Deploy to staging environment
- 🔗 Integration tests (API endpoints)
- 💨 Smoke tests (performance)
- 🎭 Full application testing

### 4. **Production Deploy** (`prod-deploy.yml`)
**Triggers:** Push to `main` branch
- ✅ Final validation
- 💾 Backup current production
- 🔵 Blue-green deployment
- 🏥 Health checks
- 📈 Load testing
- 🔄 Automatic rollback on failure

## 🔧 Environment Configuration

Each environment has its own configuration:
- **Dev**: Debug enabled, CORS enabled
- **Test**: Minimal logging, test timeouts
- **Staging**: Production-like, monitoring enabled
- **Prod**: Security headers, rate limiting, monitoring

## 🐳 Docker Usage

### Single Environment:
```bash
docker-compose --profile dev up      # Development
docker-compose --profile test up     # Test
docker-compose --profile staging up  # Staging
docker-compose --profile prod up     # Production
```

### Manual Docker Commands:
```bash
# Development
docker run -p 3000:3000 todo-app:dev

# Production
docker run -p 3000:3000 --restart unless-stopped todo-app:production
```

## 🔐 GitHub Secrets Needed

Set these in your GitHub repository settings:

### Development
- `DEV_DEPLOY_KEY` (if deploying to external server)

### Test
- `CODECOV_TOKEN` (for coverage reports)

### Staging
- `STAGING_SERVER_HOST`
- `STAGING_DEPLOY_KEY`

### Production
- `PROD_SERVER_HOST`
- `PROD_DEPLOY_KEY`
- `SLACK_WEBHOOK` (for notifications)

## 🛡️ GitHub Environment Protection

Configure in GitHub Settings > Environments:

1. **development**: No restrictions
2. **testing**: Require status checks
3. **staging**: Require review from team
4. **production**: Require manual approval + review

## 📊 Monitoring & Alerts

Each environment includes:
- Health checks
- Performance monitoring
- Error tracking
- Deployment notifications

## 🔄 Rollback Strategy

Production includes automatic rollback:
- Creates backup before deployment
- Monitors deployment health
- Auto-rollback on failure
- Manual rollback capability

## 🚀 Getting Started

1. **Commit your changes** to respective branches
2. **Set up GitHub environments** and secrets
3. **Test dev deployment** first
4. **Progress through each environment**
5. **Monitor and iterate**

## 📈 Best Practices

- ✅ Always test in lower environments first
- ✅ Use feature flags for gradual rollouts
- ✅ Monitor deployment metrics
- ✅ Keep rollback plan ready
- ✅ Document environment differences
