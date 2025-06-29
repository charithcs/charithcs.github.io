# Local Git Setup and Deployment Guide

## Step 1: Prepare Your Local Environment

### 1.1 Clone Your Repository (if not already done)
```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
```

### 1.2 Create a Backup Branch (Recommended)
```bash
git checkout -b backup-before-update
git push origin backup-before-update
git checkout main
```

## Step 2: Download and Replace Files

### 2.1 Key Files to Update
Download these files from the current environment and replace in your local repo:

**Modified Files:**
- `index.html` - Updated security headers
- `src/index.css` - Performance optimizations and animations
- `src/data/skills.ts` - Streamlined skills data
- `src/data/experience.ts` - Enhanced experience metrics
- `src/config/constants.ts` - Updated CSP configuration
- `src/hooks/useSecurity.ts` - Simplified security hooks
- `src/components/sections/Hero.tsx` - Updated metrics
- `src/components/common/SEOHead.tsx` - Enhanced CSP handling

### 2.2 File Replacement Process
For each file above:
1. Copy the content from the WebContainer environment
2. Replace the corresponding file in your local repository
3. Verify the changes look correct

## Step 3: Verify Changes Locally

### 3.1 Install Dependencies
```bash
npm install
```

### 3.2 Test the Application
```bash
npm run dev
```

### 3.3 Build Test (Optional but Recommended)
```bash
npm run build
```

## Step 4: Git Operations

### 4.1 Check Status
```bash
git status
```

### 4.2 Review Changes
```bash
git diff
```

### 4.3 Stage Changes
```bash
# Stage all changes
git add .

# Or stage specific files
git add index.html src/index.css src/data/skills.ts src/data/experience.ts
git add src/config/constants.ts src/hooks/useSecurity.ts
git add src/components/sections/Hero.tsx src/components/common/SEOHead.tsx
```

### 4.4 Commit Changes
```bash
git commit -m "feat: Enhanced portfolio with security improvements and updated metrics

- Updated security headers and CSP configuration
- Enhanced experience data with improved metrics and certifications
- Streamlined skills data structure for better performance
- Added performance optimizations in CSS
- Improved SEO head component with dynamic CSP building
- Updated hero metrics to reflect current achievements
- Simplified security hooks for better maintainability"
```

### 4.5 Push to GitHub
```bash
git push origin main
```

## Step 5: Verify Deployment

### 5.1 Check GitHub Repository
- Visit your GitHub repository
- Verify all files are updated
- Check the commit history

### 5.2 If Using GitHub Pages or Netlify
- Check if auto-deployment is triggered
- Verify the live site reflects changes

## Key Changes Summary

### Security Enhancements
- Moved CSP from static HTML to dynamic component
- Enhanced security headers configuration
- Improved CSP directive management

### Performance Improvements
- Added CSS performance optimizations
- Implemented lazy loading styles
- Enhanced font loading strategies

### Content Updates
- Updated experience metrics with current achievements
- Added new certifications and skills
- Streamlined skills categorization

### Code Quality
- Simplified security hooks
- Better separation of concerns
- Enhanced maintainability

## Troubleshooting

### If Git Push Fails
```bash
# If remote has changes you don't have locally
git pull origin main --rebase
git push origin main
```

### If Build Fails
```bash
# Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### If Merge Conflicts Occur
1. Resolve conflicts in affected files
2. Stage resolved files: `git add .`
3. Continue: `git rebase --continue` or `git commit`
4. Push: `git push origin main`

## Post-Deployment Checklist

- [ ] Repository updated on GitHub
- [ ] Live site reflects changes (if auto-deployed)
- [ ] All functionality works as expected
- [ ] Security headers are properly configured
- [ ] Performance improvements are visible
- [ ] SEO meta tags are correctly generated

## Next Steps

After successful deployment:
1. Monitor the live site for any issues
2. Test all functionality thoroughly
3. Consider setting up automated testing
4. Plan future enhancements based on performance metrics