import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  LinearProgress,
  CircularProgress,
  Paper,
  IconButton,
  Avatar,
} from '@mui/material';
import {
  LuSparkle,
  LuArrowLeft,
  LuArrowRight,
  LuCloudUpload,
  LuX,
  LuFileText,
  LuCircleCheckBig,
  LuSend,
  LuUser,
  LuMail,
  LuPenLine,
} from 'react-icons/lu';
import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaEnvelope,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import ShinyText from '../shared/ShinyText';
import '../styles/contact-styles/SmartContact.css';
import { useSelector } from 'react-redux';
import AnimatedButton from '../shared/AnimatedButton';
import Warning from '../shared/Warning';
import { useMutation } from 'convex/react';
import { api } from '../../../convex/_generated/api';
import HarshUseretheImage from '../../assets/images/picofmine.webp';

/* ──────────────── OPTION DATA ──────────────── */

const REQUEST_TYPES = [
  { value: 'New Feature', label: 'New Feature' },
  { value: 'Bug Fix', label: 'Bug Fix' },
  { value: 'Full Project', label: 'Full Project' },
  { value: 'Consultation', label: 'Consultation' },
];

const PROJECT_CATEGORIES = [
  { value: 'Web Development', label: 'Web Development' },
  { value: 'Mobile App', label: 'Mobile App' },
  { value: 'Backend/API', label: 'Backend / API' },
  { value: 'Full Stack', label: 'Full Stack' },
  { value: 'UI/UX Design', label: 'UI / UX Design' },
  { value: 'Other', label: 'Other' },
];

const TIMELINES = [
  { value: 'Urgent (1-2 weeks)', label: 'Urgent — 1-2 weeks' },
  { value: 'Short (2-4 weeks)', label: 'Short — 2-4 weeks' },
  { value: 'Medium (1-3 months)', label: 'Medium — 1-3 months' },
  { value: 'Long (3+ months)', label: 'Long — 3+ months' },
  { value: 'Flexible', label: 'Flexible' },
];

const BUDGET_RANGES = [
  { value: '$500 - $2,000', label: '$500 – $2,000' },
  { value: '$2,000 - $5,000', label: '$2,000 – $5,000' },
  { value: '$5,000 - $10,000', label: '$5,000 – $10,000' },
  { value: '$10,000+', label: '$10,000+' },
  { value: 'Discussion Needed', label: "Let's Discuss" },
];

const STEPS = ['Service', 'Schedule', 'Details', 'Attachments'];

const socialLinks = [
  {
    icon: <FaLinkedinIn />,
    url: 'https://www.linkedin.com/in/harshuserethe',
    label: 'LinkedIn',
  },
  {
    icon: <FaGithub />,
    url: 'https://github.com/HarshUserethe',
    label: 'GitHub',
  },
  {
    icon: <FaInstagram />,
    url: 'https://instagram.com/harshuserethe',
    label: 'Instagram',
  },
  {
    icon: <FaEnvelope />,
    url: 'mailto:useretheharsh@gmail.com',
    label: 'Email',
  },
  {
    icon: <FaXTwitter />,
    url: 'https://x.com/HarshUserethe04',
    label: 'Twitter',
  },
];

/* ──────────────── MUI THEME HELPERS ──────────────── */

const selectMenuProps = (bg) => ({
  PaperProps: {
    sx: {
      bgcolor: bg || '#1e1e1e',
      '& .MuiMenuItem-root': {
        fontSize: '14px',
        '&:hover': { bgcolor: 'rgba(255,255,255,0.06)' },
        '&.Mui-selected': {
          bgcolor: 'rgba(173,255,47,0.1)',
          '&:hover': { bgcolor: 'rgba(173,255,47,0.15)' },
        },
      },
    },
  },
});

const textFieldSx = (styles) => ({
  '& .MuiOutlinedInput-root': {
    '& fieldset': { borderColor: styles?.mainTheme?.textFieldBorderColor },
    '&:hover fieldset': { borderColor: styles?.mainTheme?.highlightedColor },
    '&.Mui-focused fieldset': {
      borderColor: styles?.mainTheme?.highlightedColor,
    },
    '& input, & textarea': {
      color: styles?.mainTheme?.color,
      fontSize: '14px',
    },
  },
  '& .MuiInputLabel-root': { color: styles?.mainTheme?.textFieldBorderColor },
  '& .MuiInputLabel-root.Mui-focused': {
    color: styles?.mainTheme?.highlightedColor,
  },
  '& .MuiFormHelperText-root': { color: '#f44336' },
});

const selectSx = (styles) => ({
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: styles?.mainTheme?.textFieldBorderColor,
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: styles?.mainTheme?.highlightedColor,
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: styles?.mainTheme?.highlightedColor,
  },
  '& .MuiSelect-select': { color: styles?.mainTheme?.color, fontSize: '14px' },
  '& .MuiSvgIcon-root': { color: styles?.mainTheme?.textFieldBorderColor },
});

/* ──────────────── COMPONENT ──────────────── */

const SmartContact = () => {
  const createContact = useMutation(
    api.apis.post.insertSmartContact.createSmartContact
  );
  const generateUploadUrl = useMutation(
    api.apis.post.generateUploadUrl.generateUploadUrl
  );
  const styles = useSelector((state) => state.theme.styles);

  const [activeStep, setActiveStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [errMessage, setErrMessage] = useState(null);

  const [formData, setFormData] = useState({
    requestType: '',
    projectCategory: '',
    timeline: '',
    budget: '',
    projectTitle: '',
    projectDescription: '',
    fullName: '',
    email: '',
    uploadedFiles: [],
  });

  useEffect(() => {
    if (!errMessage) return;
    const t = setTimeout(() => setErrMessage(null), 5000);
    return () => clearTimeout(t);
  }, [errMessage]);

  /* ── Handlers ── */

  const handleChange = useCallback(
    (field) => (e) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));
      setErrors((prev) => ({ ...prev, [field]: '' }));
    },
    []
  );

  const handleFileUpload = useCallback((e) => {
    const MAX_SIZE = 10 * 1024 * 1024;
    const file = e.target.files[0];
    if (!file) return;
    if (file.size > MAX_SIZE) {
      setErrMessage('File must be less than 10 MB');
      e.target.value = '';
      return;
    }
    setErrMessage('');
    setFormData((prev) => ({
      ...prev,
      uploadedFiles: [
        {
          name: file.name,
          size: `${(file.size / 1024).toFixed(2)} KB`,
          type: file.type,
        },
      ],
    }));
    e.target.value = '';
  }, []);

  const removeFile = useCallback((index) => {
    setFormData((prev) => ({
      ...prev,
      uploadedFiles: prev.uploadedFiles.filter((_, i) => i !== index),
    }));
  }, []);

  /* ── Validation ── */

  const validateStep = useCallback(
    (step) => {
      const errs = {};
      switch (step) {
        case 0:
          if (!formData.requestType) errs.requestType = 'Select a project type';
          if (!formData.projectCategory)
            errs.projectCategory = 'Select a category';
          break;
        case 1:
          if (!formData.timeline) errs.timeline = 'Select a timeline';
          if (!formData.budget) errs.budget = 'Select a budget range';
          break;
        case 2:
          if (!formData.fullName.trim())
            errs.fullName = 'Full name is required';
          if (!formData.email.trim()) errs.email = 'Email is required';
          else if (!/\S+@\S+\.\S+/.test(formData.email))
            errs.email = 'Enter a valid email';
          if (!formData.projectTitle.trim())
            errs.projectTitle = 'Project title is required';
          if (!formData.projectDescription.trim())
            errs.projectDescription = 'Description is required';
          else if (formData.projectDescription.trim().length < 20)
            errs.projectDescription = 'At least 20 characters';
          break;
        case 3:
          break;
        default:
          break;
      }
      setErrors(errs);
      return Object.keys(errs).length === 0;
    },
    [formData]
  );

  const isStepValid = useMemo(() => {
    switch (activeStep) {
      case 0:
        return !!(formData.requestType && formData.projectCategory);
      case 1:
        return !!(formData.timeline && formData.budget);
      case 2:
        return !!(
          formData.fullName.trim() &&
          formData.email.trim() &&
          /\S+@\S+\.\S+/.test(formData.email) &&
          formData.projectTitle.trim() &&
          formData.projectDescription.trim().length >= 20
        );
      case 3:
        return true;
      default:
        return false;
    }
  }, [activeStep, formData]);

  const handleNext = () => {
    if (validateStep(activeStep)) setActiveStep((s) => s + 1);
  };

  const handleBack = () => setActiveStep((s) => s - 1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let storageId = null;
    if (formData.uploadedFiles?.[0]) {
      const file = formData.uploadedFiles[0];
      const uploadUrl = await generateUploadUrl();
      const result = await fetch(uploadUrl, {
        method: 'POST',
        headers: { 'Content-Type': file.type },
        body: file,
      });
      const json = await result.json();
      storageId = json.storageId;
    }
    for (let i = 0; i < STEPS.length - 1; i++) {
      if (!validateStep(i)) {
        setActiveStep(i);
        return;
      }
    }
    setIsSubmitting(true);
    try {
      await createContact({
        attachments:
          formData.uploadedFiles?.length > 0
            ? [
                {
                  file_name: formData.uploadedFiles[0].name,
                  file_type: formData.uploadedFiles[0].type,
                  file_url: storageId,
                },
              ]
            : [],
        budget: formData.budget,
        client_info: {
          email: formData.email,
          fullname: formData.fullName,
          prj_description: formData.projectDescription,
          prj_title: formData.projectTitle,
        },
        prj_category: formData.projectCategory,
        prj_type: formData.requestType,
        status: 'new',
        timeline: formData.timeline,
        read_at: null,
        tag: 'smart',
      });
      setIsSubmitted(true);
    } catch (error) {
      setErrMessage(error.message || 'Something went wrong');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      requestType: '',
      projectCategory: '',
      timeline: '',
      budget: '',
      projectTitle: '',
      projectDescription: '',
      fullName: '',
      email: '',
      uploadedFiles: [],
    });
    setActiveStep(0);
    setIsSubmitted(false);
    setErrors({});
  };

  /* ──────────────── STEP CONTENT ──────────────── */

  const renderStep = () => {
    switch (activeStep) {
      /* ── Step 0: Service ── */
      case 0:
        return (
          <>
            <Typography
              className="sc-step-title"
              sx={{ color: styles?.mainTheme?.color }}
            >
              What kind of work are you looking for?
            </Typography>

            <Box className="sc-fields-grid">
              {/* Project Type */}
              <FormControl fullWidth error={!!errors.requestType}>
                <InputLabel
                  sx={{
                    color: styles?.mainTheme?.textFieldBorderColor,
                    '&.Mui-focused': {
                      color: styles?.mainTheme?.highlightedColor,
                    },
                  }}
                >
                  Project Type
                </InputLabel>
                <Select
                  value={formData.requestType}
                  label="Project Type"
                  onChange={handleChange('requestType')}
                  sx={selectSx(styles)}
                  MenuProps={selectMenuProps(
                    styles?.mainTheme?.profileCardBackground
                  )}
                >
                  {REQUEST_TYPES.map((opt) => (
                    <MenuItem key={opt.value} value={opt.value}>
                      {opt.label}
                    </MenuItem>
                  ))}
                </Select>
                {errors.requestType && (
                  <Typography
                    sx={{
                      color: '#f44336',
                      fontSize: '12px',
                      mt: '6px',
                      ml: '14px',
                    }}
                  >
                    {errors.requestType}
                  </Typography>
                )}
              </FormControl>

              {/* Category */}
              <FormControl fullWidth error={!!errors.projectCategory}>
                <InputLabel
                  sx={{
                    color: styles?.mainTheme?.textFieldBorderColor,
                    '&.Mui-focused': {
                      color: styles?.mainTheme?.highlightedColor,
                    },
                  }}
                >
                  Service Category
                </InputLabel>
                <Select
                  value={formData.projectCategory}
                  label="Service Category"
                  onChange={handleChange('projectCategory')}
                  sx={selectSx(styles)}
                  MenuProps={selectMenuProps(
                    styles?.mainTheme?.profileCardBackground
                  )}
                >
                  {PROJECT_CATEGORIES.map((opt) => (
                    <MenuItem key={opt.value} value={opt.value}>
                      {opt.label}
                    </MenuItem>
                  ))}
                </Select>
                {errors.projectCategory && (
                  <Typography
                    sx={{
                      color: '#f44336',
                      fontSize: '12px',
                      mt: '6px',
                      ml: '14px',
                    }}
                  >
                    {errors.projectCategory}
                  </Typography>
                )}
              </FormControl>
            </Box>
          </>
        );

      /* ── Step 1: Schedule ── */
      case 1:
        return (
          <>
            <Typography
              className="sc-step-title"
              sx={{ color: styles?.mainTheme?.color }}
            >
              Timeline & Budget
            </Typography>

            <Box className="sc-fields-grid">
              <FormControl fullWidth error={!!errors.timeline}>
                <InputLabel
                  sx={{
                    color: styles?.mainTheme?.textFieldBorderColor,
                    '&.Mui-focused': {
                      color: styles?.mainTheme?.highlightedColor,
                    },
                  }}
                >
                  Preferred Timeline
                </InputLabel>
                <Select
                  value={formData.timeline}
                  label="Preferred Timeline"
                  onChange={handleChange('timeline')}
                  sx={selectSx(styles)}
                  MenuProps={selectMenuProps(
                    styles?.mainTheme?.profileCardBackground
                  )}
                >
                  {TIMELINES.map((opt) => (
                    <MenuItem key={opt.value} value={opt.value}>
                      {opt.label}
                    </MenuItem>
                  ))}
                </Select>
                {errors.timeline && (
                  <Typography
                    sx={{
                      color: '#f44336',
                      fontSize: '12px',
                      mt: '6px',
                      ml: '14px',
                    }}
                  >
                    {errors.timeline}
                  </Typography>
                )}
              </FormControl>

              <FormControl fullWidth error={!!errors.budget}>
                <InputLabel
                  sx={{
                    color: styles?.mainTheme?.textFieldBorderColor,
                    '&.Mui-focused': {
                      color: styles?.mainTheme?.highlightedColor,
                    },
                  }}
                >
                  Budget Range
                </InputLabel>
                <Select
                  value={formData.budget}
                  label="Budget Range"
                  onChange={handleChange('budget')}
                  sx={selectSx(styles)}
                  MenuProps={selectMenuProps(
                    styles?.mainTheme?.profileCardBackground
                  )}
                >
                  {BUDGET_RANGES.map((opt) => (
                    <MenuItem key={opt.value} value={opt.value}>
                      {opt.label}
                    </MenuItem>
                  ))}
                </Select>
                {errors.budget && (
                  <Typography
                    sx={{
                      color: '#f44336',
                      fontSize: '12px',
                      mt: '6px',
                      ml: '14px',
                    }}
                  >
                    {errors.budget}
                  </Typography>
                )}
              </FormControl>
            </Box>
          </>
        );

      /* ── Step 2: Details ── */
      case 2:
        return (
          <>
            <Typography
              className="sc-step-title"
              sx={{ color: styles?.mainTheme?.color }}
            >
              Tell us about yourself & your project
            </Typography>

            <Box className="sc-fields-grid">
              <TextField
                label="Full Name"
                placeholder="John Doe"
                value={formData.fullName}
                onChange={handleChange('fullName')}
                fullWidth
                required
                error={!!errors.fullName}
                helperText={errors.fullName}
                sx={textFieldSx(styles)}
                InputProps={{
                  startAdornment: (
                    <LuUser
                      style={{ marginRight: 10, opacity: 0.5, flexShrink: 0 }}
                      color={styles?.mainTheme?.color}
                      size={16}
                    />
                  ),
                }}
              />

              <TextField
                label="Email"
                placeholder="john@example.com"
                type="email"
                value={formData.email}
                onChange={handleChange('email')}
                fullWidth
                required
                error={!!errors.email}
                helperText={errors.email}
                sx={textFieldSx(styles)}
                InputProps={{
                  startAdornment: (
                    <LuMail
                      style={{ marginRight: 10, opacity: 0.5, flexShrink: 0 }}
                      color={styles?.mainTheme?.color}
                      size={16}
                    />
                  ),
                }}
              />

              <Box className="sc-field-full">
                <TextField
                  label="Project Title"
                  placeholder="E-commerce Platform Redesign"
                  value={formData.projectTitle}
                  onChange={handleChange('projectTitle')}
                  fullWidth
                  required
                  error={!!errors.projectTitle}
                  helperText={errors.projectTitle}
                  sx={textFieldSx(styles)}
                  InputProps={{
                    startAdornment: (
                      <LuPenLine
                        style={{ marginRight: 10, opacity: 0.5, flexShrink: 0 }}
                        color={styles?.mainTheme?.color}
                        size={16}
                      />
                    ),
                  }}
                />
              </Box>

              <Box className="sc-field-full">
                <TextField
                  label="Project Description"
                  placeholder="Min 20 characters. Describe requirements, goals, features …"
                  value={formData.projectDescription}
                  onChange={handleChange('projectDescription')}
                  fullWidth
                  required
                  multiline
                  rows={4}
                  error={!!errors.projectDescription}
                  helperText={
                    errors.projectDescription ||
                    `${formData.projectDescription.length} / 20 characters min`
                  }
                  sx={{
                    ...textFieldSx(styles),
                    '& .MuiFormHelperText-root': {
                      color: errors.projectDescription
                        ? '#f44336'
                        : 'rgba(255,255,255,0.35)',
                    },
                  }}
                />
              </Box>
            </Box>
          </>
        );

      /* ── Step 3: Attachments ── */
      case 3:
        return (
          <>
            <Typography
              className="sc-step-title"
              sx={{ color: styles?.mainTheme?.color }}
            >
              Upload relevant files&nbsp;
              <Typography
                component="span"
                sx={{ opacity: 0.45, fontSize: '13px' }}
              >
                (optional)
              </Typography>
            </Typography>

            <Box
              className="sc-upload-zone"
              sx={{ bgcolor: styles?.mainTheme?.profileCardBackground }}
              onClick={() => document.getElementById('sc-file-input').click()}
            >
              <input
                id="sc-file-input"
                type="file"
                onChange={handleFileUpload}
                style={{ display: 'none' }}
                accept=".pdf,.doc,.docx,.txt,.png,.jpg,.jpeg"
              />
              <LuCloudUpload
                size={36}
                color={styles?.mainTheme?.highlightedColor}
              />
              <Typography
                sx={{
                  color: styles?.mainTheme?.color,
                  fontSize: '14px',
                  fontWeight: 500,
                }}
              >
                Click to upload
              </Typography>
              <Typography
                sx={{
                  color: styles?.mainTheme?.textFieldBorderColor,
                  fontSize: '12px',
                }}
              >
                PDF, DOC, TXT, PNG, JPG — max 10 MB
              </Typography>
            </Box>

            {formData.uploadedFiles.map((file, idx) => (
              <Paper
                key={idx}
                className="sc-file-chip"
                sx={{
                  bgcolor: styles?.mainTheme?.profileCardBackground,
                  border: `1px solid ${styles?.mainTheme?.textFieldBorderColor}`,
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    overflow: 'hidden',
                  }}
                >
                  <LuFileText
                    size={18}
                    color={styles?.mainTheme?.highlightedColor}
                  />
                  <Box>
                    <Typography
                      sx={{
                        color: styles?.mainTheme?.color,
                        fontSize: '13px',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        maxWidth: '240px',
                      }}
                    >
                      {file.name}
                    </Typography>
                    <Typography
                      sx={{
                        color: styles?.mainTheme?.textFieldBorderColor,
                        fontSize: '11px',
                      }}
                    >
                      {file.size}
                    </Typography>
                  </Box>
                </Box>
                <IconButton
                  size="small"
                  onClick={() => removeFile(idx)}
                  sx={{ color: '#f44336' }}
                >
                  <LuX size={16} />
                </IconButton>
              </Paper>
            ))}
          </>
        );

      default:
        return null;
    }
  };

  /* ──────────────── SUCCESS SCREEN ──────────────── */

  if (isSubmitted) {
    return (
      <Box
        className="sc-root"
        sx={{ background: styles?.mainTheme?.backgroundColor }}
      >
        <Paper
          className="sc-panel"
          elevation={0}
          sx={{
            background: styles?.mainTheme?.backgroundColor,
            justifyContent: 'center',
          }}
        >
          <Box className="sc-success">
            <LuCircleCheckBig
              className="sc-success-icon"
              size={64}
              color={styles?.mainTheme?.highlightedColor}
            />
            <Typography
              sx={{
                color: styles?.mainTheme?.color,
                fontSize: '28px',
                fontWeight: 700,
              }}
            >
              Thank You!
            </Typography>
            <Typography
              sx={{
                color: styles?.mainTheme?.textFieldBorderColor,
                fontSize: '15px',
                lineHeight: 1.7,
                maxWidth: 420,
              }}
            >
              Your inquiry has been submitted. I'll review your request and get
              back to you within 24-48 hours.
            </Typography>
            <Box sx={{ mt: 2 }}>
              <AnimatedButton
                color={styles?.mainTheme?.color}
                label="Explore Projects"
                hoverLabel="Explore Projects"
                hyperLink="/project"
                btnWidth="fit-content"
              />
            </Box>
          </Box>
        </Paper>
      </Box>
    );
  }

  /* ──────────────── MAIN RENDER ──────────────── */

  return (
    <Box
      className="sc-root"
      sx={{ background: styles?.mainTheme?.backgroundColor }}
    >
      <Paper
        className="sc-panel"
        elevation={0}
        sx={{ background: styles?.mainTheme?.backgroundColor }}
      >
        {/* ─── Header ─── */}
        <Box className="sc-header">
          <Box className="sc-title-row">
            <LuSparkle color={styles?.mainTheme?.highlightedColor} size={16} />
            <Typography
              className="sc-subtitle"
              sx={{ color: styles?.mainTheme?.highlightedColor }}
            >
              <ShinyText
                text="START A PROJECT"
                disabled={false}
                speed={1.2}
                className="shinny-txt"
                highlightedColor={styles?.mainTheme?.highlightedColor}
              />
            </Typography>
          </Box>

          <Typography
            className="sc-heading"
            sx={{ color: styles?.mainTheme?.color }}
          >
            Let's build something great together
          </Typography>

          {/* Stepper */}
          <Stepper
            activeStep={activeStep}
            alternativeLabel
            sx={{
              mb: '4px',
              '& .MuiStepLabel-root .Mui-completed': {
                color: styles?.mainTheme?.highlightedColor,
              },
              '& .MuiStepLabel-root .Mui-active': {
                color: styles?.mainTheme?.highlightedColor,
              },
              '& .MuiStepLabel-label': {
                color: styles?.mainTheme?.textFieldBorderColor,
                fontSize: '12px',
              },
              '& .MuiStepLabel-label.Mui-active': {
                color: styles?.mainTheme?.color,
                fontWeight: 600,
              },
              '& .MuiStepLabel-label.Mui-completed': {
                color: styles?.mainTheme?.color,
              },
              '& .MuiStepConnector-line': {
                borderColor: styles?.mainTheme?.textFieldBorderColor,
              },
            }}
          >
            {STEPS.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {/* Progress bar */}
          <LinearProgress
            variant="determinate"
            value={(activeStep / (STEPS.length - 1)) * 100}
            sx={{
              mt: '12px',
              height: '4px',
              borderRadius: '2px',
              bgcolor: 'rgba(255,255,255,0.06)',
              '& .MuiLinearProgress-bar': {
                bgcolor: styles?.mainTheme?.highlightedColor,
              },
            }}
          />
        </Box>

        {/* ─── Scrollable Body ─── */}
        <Box className="sc-body" component="form" onSubmit={handleSubmit}>
          {renderStep()}
        </Box>

        {/* ─── Error banner ─── */}
        {errMessage && (
          <Box sx={{ px: '32px' }}>
            <Warning message={{ data: errMessage, type: 'error' }} />
          </Box>
        )}

        {/* ─── Fixed Footer ─── */}
        <Box className="sc-footer">
          <Button
            startIcon={<LuArrowLeft size={16} />}
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{
              textTransform: 'none',
              fontSize: '13px',
              borderRadius: '10px',
              color: styles?.mainTheme?.color,
              borderColor: styles?.mainTheme?.textFieldBorderColor,
              px: '20px',
              '&:hover': {
                borderColor: styles?.mainTheme?.highlightedColor,
                bgcolor: 'rgba(173,255,47,0.05)',
              },
              '&.Mui-disabled': {
                color: styles?.mainTheme?.textFieldBorderColor,
                borderColor: styles?.mainTheme?.textFieldBorderColor,
                opacity: 0.3,
              },
            }}
            variant="outlined"
          >
            Back
          </Button>

          <Typography
            className="sc-footer-info"
            sx={{ color: styles?.mainTheme?.textFieldBorderColor }}
          >
            Step {activeStep + 1} of {STEPS.length}
          </Typography>

          {activeStep === STEPS.length - 1 ? (
            isSubmitting ? (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Typography
                  sx={{ color: styles?.mainTheme?.color, fontSize: '13px' }}
                >
                  Submitting
                </Typography>
                <CircularProgress
                  size={18}
                  sx={{ color: styles?.mainTheme?.highlightedColor }}
                />
              </Box>
            ) : (
              <Button
                type="submit"
                onClick={handleSubmit}
                endIcon={<LuSend size={14} />}
                sx={{
                  textTransform: 'none',
                  fontSize: '13px',
                  borderRadius: '10px',
                  bgcolor: styles?.mainTheme?.highlightedColor,
                  color: '#000',
                  fontWeight: 600,
                  px: '22px',
                  '&:hover': {
                    bgcolor: styles?.mainTheme?.highlightedColor,
                    opacity: 0.9,
                  },
                }}
              >
                Submit
              </Button>
            )
          ) : (
            <Button
              endIcon={<LuArrowRight size={16} />}
              disabled={!isStepValid}
              onClick={handleNext}
              sx={{
                textTransform: 'none',
                fontSize: '13px',
                borderRadius: '10px',
                bgcolor: styles?.mainTheme?.highlightedColor,
                color: styles?.mainTheme?.color,
                px: '22px',
                '&:hover': {
                  bgcolor: styles?.mainTheme?.highlightedColor,
                  opacity: 0.9,
                },
                '&.Mui-disabled': {
                  bgcolor: 'rgba(255,255,255,0.08)',
                  color: 'rgba(255,255,255,0.25)',
                },
              }}
            >
              Next
            </Button>
          )}
        </Box>
      </Paper>
      {/* Right Side - Profile Card */}
      <Box className="profiler">
        <Box
          className="profile-card"
          sx={{ backgroundColor: styles?.mainTheme?.profileCardBackground }}
        >
          <Box className="availability-badge">
            {/* Available Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                padding: '8px 16px',
                borderRadius: '20px',
                marginBottom: '32px',
                backdropFilter: 'blur(10px)',
                border: '1px solid #6e6e6eff',
              }}
            >
              <div
                style={{
                  width: '8px',
                  height: '8px',
                  backgroundColor: '#4ade80',
                  borderRadius: '50%',
                  boxShadow: '0 0 8px #4ade80',
                }}
              ></div>
              <span
                style={{
                  fontSize: '14px',
                  color: styles?.mainTheme?.color,
                }}
              >
                Available for work
              </span>
            </div>
          </Box>

          <Avatar
            src={HarshUseretheImage}
            alt="Profile"
            className="profile-avatar"
          />

          <Typography className="profile-description">
            My inbox is always open. Whether you have a project or just want to
            say Hi. I would love to hear from you. Feel free to contact me and
            I'll get back to you.
          </Typography>

          {/* Let's Discuss Your Project */}
          <Box
            onClick={() => {
              document
                .querySelector('.contact-section')
                ?.scrollIntoView({ behavior: 'smooth' });
              handleDiscussProjectButton();
            }}
            className="cta-button-glow"
          >
            <span>Let's Discuss Your Project</span>
            {/* <LuArrowRight className="arrow-icon" /> */}
            <div className="shimmer-effect" />
          </Box>

          <Box className="social-links">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SmartContact;
